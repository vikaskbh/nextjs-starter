const fs = require('fs');
const path = require('path');
const { logStep } = require('./utils/logger');
const FORCE_RUN = process.argv.includes('--force');

// Global crash catchers
process.on('unhandledRejection', (reason, p) => {
  console.error('🛑 Unhandled Promise rejection:', reason);
});
process.on('uncaughtException', err => {
  console.error('🛑 Uncaught Exception:', err);
});

const pipelineSteps = [
  '0_hello_world'
];

const DATA_DIR = path.resolve(__dirname, 'data');
const REPORT_DIR = path.resolve(__dirname, 'report');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR);
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const runWithTimeout = (fn, ms = 60000) =>
  Promise.race([
    fn(),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))
  ]);

(async () => {
  const failedSteps = [];

  for (const step of pipelineSteps) {
    const stepPath = path.resolve(__dirname, 'agents', `${step}.js`);
    const doneFile = path.join(DATA_DIR, `${step}.done`);

    if (fs.existsSync(doneFile) && !FORCE_RUN) {
      logStep(`⏭ Skipping ${step} (already done)`);
      continue;
    }

    logStep(`⏳ Running ${step}...`);

    try {
      const agent = require(stepPath);
      await runWithTimeout(() => agent(), 90000); // 90s timeout per step
      fs.writeFileSync(doneFile, 'done');
      logStep(`✅ ${step} completed`);
    } catch (err) {
      failedSteps.push(step);
      logStep(`❌ ${step} failed: ${err.message}`);
    }
  }

  // Merge partial outputs from successful steps
  const report = {};
  for (const step of pipelineSteps) {
    const filePath = path.join(DATA_DIR, `${step}.json`);
    if (fs.existsSync(filePath)) {
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        report[step] = content;
      } catch (e) {
        logStep(`⚠ Skipped merge for ${step}: Invalid JSON`);
      }
    }
  }

  const outputPath = path.join(REPORT_DIR, 'final-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  logStep(`📄 Final report written to: ${outputPath}`);

  if (failedSteps.length > 0) {
    logStep(`⚠ Completed with some failed steps: ${failedSteps.join(', ')}`);
  } else {
    logStep('🎉 All steps completed successfully');
  }
})();

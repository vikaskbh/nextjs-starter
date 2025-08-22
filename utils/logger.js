const fs = require('fs');
const path = require('path');

const LOG_FILE = path.resolve(__dirname, '../pipeline.log');

function logStep(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);

  try {
    fs.appendFileSync(LOG_FILE, logMessage + '\n');
  } catch (err) {
    console.error('⚠️ Failed to write to log file:', err.message);
  }
}

module.exports = { logStep };

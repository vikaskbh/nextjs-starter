const fs = require('fs');
const path = require('path');
const { logStep } = require('../utils/logger');

module.exports = async function run() {
  logStep('👋 Hello from 0_hello_world.js agent');

  const output = {
    message: 'Hello, this is a sample agent for the SEO pipeline!',
    timestamp: new Date().toISOString()
  };

  const outputPath = path.resolve(__dirname, '../data/0_hello_world.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  logStep('✅ Hello World agent completed');
};

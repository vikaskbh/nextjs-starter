const { logStep } = require('../utils/logger');
const fs = require('fs');
const https = require('https');
const { URL } = require('url');
require('dotenv').config();

const SITE_URL = process.env.SITE_URL;
const outputPath = './data/1_ssl_check.json';

async function checkSSL(url) {
  try {
    const parsedUrl = new URL(url);
    return new Promise((resolve) => {
      const req = https.request({ host: parsedUrl.hostname, port: 443, method: 'GET' }, res => {
        resolve(res.socket.authorized || res.socket.getPeerCertificate != null);
      });
      req.on('error', () => resolve(false));
      req.end();
    });
  } catch {
    return false;
  }
}

module.exports = async function run() {
  logStep('🔍 Starting SSL check...');
  const isSecure = await checkSSL(SITE_URL);
  fs.writeFileSync(outputPath, JSON.stringify({ SITE_URL, isSecure }, null, 2));
  logStep(`✅ SSL check result: ${isSecure ? 'Valid' : 'Not Valid'}`);
};

const { join } = require('path');
const pkg = join(process.cwd(), 'package.json');
const fs = require('fs');

module.exports = fs.existsSync(pkg) ? require(pkg) : {};

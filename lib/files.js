const fs = require('fs');
const path = require('path');

module.exports = {
  getWebRoot: () => {
    return `${path.basename(process.cwd())}/../web`;
  }
};
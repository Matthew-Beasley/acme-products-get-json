const fs = require('fs');

const readJSON = (filePath) => {
  return new Promise((resolve, reject) => { 
    fs.readFile(filePath, (err, data) => {
      if (data) {
        try {
          resolve(JSON.parse(data));
        }
        catch (ex) {
          reject(ex);
        }
      }
      else {
        reject(err);
      }
    })
  })
}

module.exports = {
  readJSON
};

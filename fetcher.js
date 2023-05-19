const fs = require('fs');
const request = require('request');
const flatten = require('../lotide/flatten')

let URL = process.argv.slice(2)[0];
let path = process.argv.slice(2)[1];


request(URL, (err, response, body) => {
  if (err) {
    console.log('ERROR: ', err);
    return;
  };

  fs.writeFile(path, body, err => {
    if (err) {
      console.error('error: ', err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
    }
  })
});
const fs = require('fs');
const path = require('path');

function readFile() {
  return new Promise(function(resolve){
    resolve(3)
  })
}

readFile().then(valor => console.log(valor));
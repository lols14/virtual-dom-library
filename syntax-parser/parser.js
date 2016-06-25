let fs = require('fs');
fs.readFile(__dirname + '/syntax-test.js','utf8', (err ,data) =>{
    if (data){
      console.log(data);
    }
})

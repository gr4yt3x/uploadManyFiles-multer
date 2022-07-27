const express = require('express');
const app = express();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) { 
        cb(null, __dirname + '/uploads/');    
     }, //nome do arquivo; newDate = esta sendo utilizado para colocar a data/hora atual no nome do arquivo.
     
     filename: function (req, file, cb) { 
        cb(null , file.originalname);   
     }
  });


const upload = multer({ storage: storage });

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.post('/upload', upload.array('file'), (req, res) => {
    res.send("File added sucefully");
});

app.listen(3000);

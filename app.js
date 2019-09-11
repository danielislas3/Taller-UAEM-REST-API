const express = require("express");
const app = express();
const port = 3000

app.listen(port,
   function (){
     console.log(`Servidor prendido en el puerto 📡:  ${port}`);
 });


 //app.get('/', function (req, res) {
  //res.sendFile('./hola.html',{ root: '.' });
 // res.sendFile('<h1>Hola</h1>')
//});
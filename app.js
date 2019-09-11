const express = require("express");
const app = express();
const port = 3000

app.listen(port,
   function (){
     console.log(`Servidor prendido en el puerto 📡:  ${port}`);
 });


 app.get('/api',  (req, res) =>{
  //res.sendFile('./hola.html',{ root: '.' });
 res.send('<h1>Hola</h1>')
});
app.get('/',(req,res,)=>{
      res.sendFile('./index.html',{ root: '.' });
})
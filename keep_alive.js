const express = require('express');
const app = express();
app.get('/',(req, res) =>res.send('<center><h2><font color ="red">Eros E City DM bot alive now...</h2></center></font>') )
const port = 8080;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));



// Do not change anything here



//var http = require('http');

//http.createServer(function (req, res) {
  //res.write("I'm alive");
  //res.end();
//}).listen(8080);









//const express = require('express');
//const app = express();
//app.get('/',(req, res) =>res.send('<center><h2><font color ="red">Eros E City DM bot alive now...</h2></center></font>'))
//const port = 8080;
//app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));





const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{
  res.send(__dirname + "index.html");
})

app.listen(3000);

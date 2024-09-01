const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT = 8000
const api = require('./bus/routes/api')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('bus'));

app.use(bodyParser.json())

app.use('/api',api)
app.get('/',function(req,res){
  res.send('connected to server')
})

app.listen(PORT,function(){
  console.log('server running on localhost'+ PORT)
})


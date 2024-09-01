const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const Buses = require('../models/bus')
const mongoose = require('mongoose')
const user = require('../models/user')
const db = "mongodb://localhost:27017/testingDB"


mongoose.connect(db ,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('mongo connected successfully');
})
.catch((err) => {
    console.error('Mongo connection error : ',err);
});


router.get('/',(req,res) => {
  res.send('from api route')
})

router.post('/register',(req,res) =>{
let userData = req.body
let user = new User(userData)
user.save()
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})
})


// router.post('/login', (req,res) => {
//   let userData = req.body

//   User.findOne({ email: userData.email}, (error,user) =>{
//     if (error){
//       console.log(error)
//     }else{
//       if(!user){
//         res.status(401).send('invalid username')
//       }else
//       if( user.password !== userData.password){
//         res.status(401).send('invalid password')
//       }else{
//         res.status(200).send(user)
//       }
//     }
//   })
// })
router.post('/login', (req, res) => {
    let userData = req.body;
  
    User.findOne({ email: userData.email }).exec()
      .then(user => {
        if (!user || user.length === 0) {
          res.status(401).send('Invalid username');
          return;
        }
  
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password');
          return;
        }
  
        res.status(200).send(user);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Internal Server Error');
      });
  });
  


// router.post('/bus',(req,res)=>{
//   console.log(req.body.from)
//   console.log(req.body.to)
//   console.log(req.body.traveldate)
//   Buses.find({from: req.body.from, to: req.body.to},(err,data)=>{
//     if(!err){
//       res.json(data);
//       console.log(data);
//     }
//     else {
//       console.log(err)
//     }
//   })
// })

router.post('/bus', (req, res) => {
    console.log('1');
    console.log(req.body.from);
    console.log(req.body.to);
    console.log(req.body.traveldate);
  
    Buses.find({ from: req.body.from, to: req.body.to }).exec()
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  

// router.get('/buses',(req,res) => {
//   console.log('buses');
//   Buses.find({},(err,data)=>{
//     if(!err){
//       res.json(data);
//       console.log(data);
//     }
//   })
// })

router.get('/buses', (req, res) => {
    console.log('buses');
  
    Buses.find({}).exec()
      .then(data => {
        res.json(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  


module.exports = router

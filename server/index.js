require('dotenv').config({path: '../.env'});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PlayerModel = require('./models/Player')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI);

app.post('/signup', (req, res) => {
  PlayerModel.create(req.body)
    .then(players => res.json(players))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  PlayerModel.findOne({ email: email })
    .then(user => {
      if(user) {
        if(user.password === password) {
          res.json('Success')
        }
        else {
          res.json("Password is incorrect")
        }
      }
      else {
        res.json('Account does not exist')
      }
    })
})

app.listen(3001, () => {
  console.log('Server is running')
})

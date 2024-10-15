require('dotenv').config({path: '../.env'});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PlayerModel = require('./models/Player')

const app = express()
app.use(express.json())

const corsOptions = {
    origin: [
      'https://www.nebulousenigma.com',
      'http://127.0.0.1:5500',
      'http://localhost:5173',
      'http://localhost:3001'
    ],
    credentials: true
}

app.use(cors(corsOptions))

mongoose.connect(process.env.DB_URI);

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  PlayerModel.findOne({ username: username })
    .then(user => {
      if(user) {
        res.json("Account already exists")
      }
      else {
        PlayerModel.create(req.body)
          .then(players => res.json(players))
          .catch(err => res.json(err))
      }
    })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  PlayerModel.findOne({ username: username })
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

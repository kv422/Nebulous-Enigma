require('dotenv').config({path: '../.env'})

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const userRouter = require('./routes/user')

const corsOptions = {
    origin: [
      'https://www.nebulousenigma.com',
      'http://127.0.0.1:5500',
      'http://localhost:5173',
      'http://localhost:3001'
    ]
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(userRouter)

mongoose.connect(process.env.DB_URI);

app.listen(3001, () => {
  console.log('Server is running')
})

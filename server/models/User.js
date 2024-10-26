const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    unique: true,
    type: String,
    minLength: 3,
    lowercase: true,
  },
  password: {
    required: true,
    type: String,
    minLength: 4,
  }
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel

const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String
})

const PlayerModel = mongoose.model('players', PlayerSchema)
module.exports = PlayerModel

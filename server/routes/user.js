const express = require('express')
const UserModel = require('../models/User')
var mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const userRouter = express.Router()


// sign up route
userRouter.post('/signup', async (req, res) => {
  try {
    const { name, username, password, confirmPassword } = req.body
    // checks if any fields are empty
    if (!name || !username || !password || !confirmPassword) {
      return res
        .status(400)
        .json('One or more fields missing')
    }
    // validates password length
    if (password.length < 4) {
      return res
        .status(400)
        .json('Password must be at least 4 characters')
    }
    // checks both password fields are the setName
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json('Passwords do not match')
    }
    // checks if username already exists
    if (await UserModel.findOne({ username })) {
      return res
        .status(400)
        .json('Username is already taken')
    }

    // if nothing above fails, create account
      // hashes password for security. 8 is the 'cost factor,' meaning 2^8
      // rounds of hashing will be done. this increases the time it takes to
      // brute force a password. higher cost = more secure and more time to hash
    const hashedPassword = await bcryptjs.hash(password, 8)
      // create() is shorthand for calling new() + save()
    UserModel.create({ name, username, password: hashedPassword })

  } catch (err) { // in case of error
    res
      .status(500)
      .json({ error: err.message })
  }
})

// log in route
userRouter.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    // checks if any fields are empty
    if (!username || !password) {
      return res
        .status(400)
        .json('One or more fields missing')
    }
    // checks if username does not exist
    user = await UserModel.findOne({ username })
    if (!user) {
      return res
        .status(400)
        .json('Account with this username does not exist')
    }
    // checks if password does not match
    if ( !(await bcryptjs.compare(password, user.password)) ) {
      return res
        .status(400)
        .json('Password is incorrect')
    }

    // create token for login to persist
    const token = jwt.sign({ id: user._id }, 'passwordKey')
    res.json({ token, user: { id: user._id, username: user.username } })

  } catch (err) {
    res
      .status(500)
      .json({ error: err.message })
  }
})

// checks for valid login token
userRouter.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token')

    if (!token) {
      return res.json(false)
    }

    const verified = jwt.verify(token, 'passwordKey')
    if (!verified) {
      return res.json(false)
    }

    if ( !(await UserModel.findById(verified.id)) ) {
      return res.json(false)
    }

    // if all above pass, token is valid
    return res.json(true)

  } catch (err) {
    res
      .status(500)
      .json({ error: err.message })
  }
})

// get user's username and their token
userRouter.get('/', auth, async (req, res) => {
  const user = await UserModel.findById(req.user)
  res.json({
    username: user.username,
    id: user._id,
  })
})

module.exports = userRouter

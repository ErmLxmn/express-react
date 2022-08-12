const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('../models/Users')

const userRoutes = (req, res) =>
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })

module.exports = userRoutes

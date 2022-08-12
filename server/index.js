const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const UserModel = require('./models/Users')
const UserAccessModel = require('./models/UsersAccess')
const userRoutes = require('./routes/userRoutes')
const ObjectId = require('mongodb').ObjectId

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/api/users', userRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Running')
})

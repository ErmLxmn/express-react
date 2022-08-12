const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Running')
})

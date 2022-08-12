const mongoose = require('mongoose')
const ObjectId = require('mongoose')

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateCreated: { type: String, required: true },
})

const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel

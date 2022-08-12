const mongoose = require('mongoose')

const UserAccessSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: true },
})

const UserAccessModel = mongoose.model('Users.Access', UserAccessSchema)

module.exports = UserAccessModel

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Register = new Schema(
  {
    name: String,
    lastname: String,
    email: String,
    password: String
  },
  {
    timeStamps: true,
    versionKey: false
  }
);
const register = mongoose.model('register', Register, 'register')
module.exports = register
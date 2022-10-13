const bcrypt = require('bcryptjs')
const User = require('../models/userSchema')
exports.Register = async (req, res) => {
  try {
    const trouve = await User.findOne({ email: req.body.email })
    console.log(trouve)
    if (trouve) {
      res.send({ message: 'email exists' })
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash

      const user = await User.create(req.body)
      res.send(user)
    }
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
};
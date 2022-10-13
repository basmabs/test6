const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')

exports.Login = async (req, res) => {
  try {
    const trouve = await User.findOne({ email: req.body.email })
    console.log(trouve);
    if (trouve) {
      const validPassword = await bcrypt.compare(req.body.password, trouve.password)
      console.log(validPassword);
      if (validPassword) {
        const data = {
          email: trouve.email,
          userId: trouve._id
        }
        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({
          message: "token", token
        })
      } else {
        res.status(400).send({
          message: 'verify your email or password'
        })
      }
    }
    else {
      res.status(400).send({ message: 'verify email and password' })
    }
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}
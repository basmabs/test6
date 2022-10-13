const express = require('express');
const { Login } = require('../controllers/login');
const { Register } = require('../controllers/register');
const router = express.Router();
const passport = require('passport')
router.post('/register', Register)
router.post('/login', Login)
router.get('/profile', passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });
module.exports = router;
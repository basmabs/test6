const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/challenge6').then(() => {
  console.log('server is running')
}).catch(error => {
  console.log(error)
});
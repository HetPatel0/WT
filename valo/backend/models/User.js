const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  valorantId: {
    type: String,
    required: true,
  },
  storeData: {
    type: Object,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

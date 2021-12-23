const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type:String,
    unique:true
  },
  password: {
    type:String
  }
},
{
  timestamps:true,
  versionKey:false
});

module.exports = mongoose.model('users', UserSchema);
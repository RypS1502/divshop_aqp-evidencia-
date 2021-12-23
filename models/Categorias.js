const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type:String,
    unique:true
  }
},
{
  timestamps:true,
  versionKey:false
});

module.exports = mongoose.model('categories', categorySchema);
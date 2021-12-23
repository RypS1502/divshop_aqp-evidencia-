const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type:String,
  },
  category: {
    type:mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId('61bb5acd6c228cc8f746e79a')
  },
  url: {
    type:String
  },
  price: {
    type:Number
  },
  description: {
    type:String
  }
},
{
  timestamps:true,
  versionKey:false
});

module.exports = mongoose.model('Products', productSchema);
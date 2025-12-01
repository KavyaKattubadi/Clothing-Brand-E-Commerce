const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  sizes: [String],
  stock: { type:Number, default: 100 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

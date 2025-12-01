const Product = require('../models/Product');

const listProducts = async (req, res) => {
  try {
    const { page=1, limit=10, search, category, size, minPrice, maxPrice } = req.query;
    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (category && category !== 'All') query.category = category;
    if (size) query.sizes = size;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    const skip = (Number(page)-1)*Number(limit);
    const total = await Product.countDocuments(query);
    const products = await Product.find(query).skip(skip).limit(Number(limit));
    res.json({ products, total, page: Number(page), pages: Math.ceil(total/limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    res.json(p);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { listProducts, getProduct };

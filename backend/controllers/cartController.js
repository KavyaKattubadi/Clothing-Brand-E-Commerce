const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.json({ items: [] });
    let cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) cart = await Cart.create({ user: userId, items: [] });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, size, qty=1 } = req.body;
    if (!productId || !size) return res.status(400).json({ message: 'productId and size required' });
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ message: 'Login to save server-side cart' });

    let cart = await Cart.findOne({ user: userId });
    if (!cart) cart = await Cart.create({ user: userId, items: [] });

    const existing = cart.items.find(i=>i.product.toString()===productId && i.size===size);
    if (existing) existing.qty += Number(qty);
    else cart.items.push({ product: productId, name: product.name, size, qty: Number(qty), price: product.price });

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ message:'Login required' });
    const { items } = req.body;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) cart = await Cart.create({ user: userId, items: [] });
    cart.items = items;
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const clearCart = async (userId) => {
  await Cart.findOneAndUpdate({ user: userId }, { items: [] });
};

module.exports = { getCart, addToCart, updateCart, clearCart };

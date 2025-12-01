const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const sendOrderEmail = require('../utils/sendEmail');

const placeOrder = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { items: clientItems, totalPrice } = req.body;
    if (!clientItems || !clientItems.length) return res.status(400).json({ message: 'No items' });

    const order = await Order.create({
      user: userId,
      items: clientItems,
      totalPrice,
      orderDate: new Date()
    });

    // clear cart
    if (userId) await Cart.findOneAndUpdate({ user: userId }, { items: [] });

    // send email (best-effort)
    try {
      const user = userId ? await User.findById(userId) : { email: req.body.email };
      await sendOrderEmail(order, user);
    } catch (err) {
      console.error('Email error:', err.message);
    }

    res.status(201).json({ message: 'Order placed', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { placeOrder, getOrder };

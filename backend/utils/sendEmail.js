const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOrderEmail = async (order, user) => {
  const html = `<h2>Thank you for your order!</h2>
  <p>Order ID: ${order._id}</p>
  <p>Date: ${new Date(order.orderDate || Date.now()).toLocaleString()}</p>
  <h3>Items:</h3>
  ${order.items.map(i=>`<p>${i.name} (${i.size}) x ${i.qty} - ₹${i.price}</p>`).join('')}
  <h2>Total: ₹${order.totalPrice}</h2>
  <p>We will process your order shortly.</p>`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: `Order Confirmation - #${order._id}`,
    html
  };
  return transporter.sendMail(mailOptions);
};

module.exports = sendOrderEmail;

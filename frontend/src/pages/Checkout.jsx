import React from 'react';
export default function Checkout(){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const total = cart.reduce((s,i)=>s + (i.price * (i.qty||1)),0);
  const place = async ()=> {
    // If user were logged in, you'd POST to /api/orders with server-side cart.
    alert('This demo performs a mock checkout. Backend order placement requires login (JWT cookie). Total: ₹' + total);
    // optionally allow guest to enter email and simulate order placement via backend (not implemented here)
  };
  return (<div><h2>Checkout</h2><div>{cart.map((i,idx)=> <div key={idx}>{i.name} ({i.size}) x{i.qty} - ₹{i.price}</div>)}</div><h3>Total: ₹{total}</h3><button onClick={place}>Place Order (Mock)</button></div>);
}

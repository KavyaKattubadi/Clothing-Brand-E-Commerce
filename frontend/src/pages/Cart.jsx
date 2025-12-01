import React, {useState, useEffect} from 'react';
export default function Cart(){
  const [items,setItems]=useState([]);
  useEffect(()=> {
    const c = JSON.parse(localStorage.getItem('cart')||'[]');
    setItems(c);
  },[]);
  const checkout = ()=> {
    // Navigate to checkout; frontend-only guest checkout supported
    window.location.href='/checkout';
  };
  return (<div><h2>Cart</h2>{items.length===0? <p>Cart empty</p> : (<div>{items.map((it,i)=> <div key={i}>{it.name} ({it.size}) x{it.qty} - ₹{it.price}</div>)}</div>)}<button onClick={checkout}>Checkout</button></div>);
}

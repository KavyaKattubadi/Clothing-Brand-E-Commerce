import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');
  const navigate = useNavigate();
  useEffect(()=> {
    fetch('http://localhost:5000/api/products/'+id).then(r=>r.json()).then(setProduct);
  },[id]);
  const add = async ()=>{
    // simple guest flow: save to localStorage cart
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push({ productId: product._id, name: product.name, size, qty:1, price: product.price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart (guest). Login to save server-side cart.');
    navigate('/cart');
  };
  if(!product) return <div>Loading...</div>;
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} style={{width:300}}/>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <div>
        <label>Size: </label>
        <select value={size} onChange={e=>setSize(e.target.value)}>
          <option value="">Select</option>
          {product.sizes?.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <button onClick={add} disabled={!size}>Add to cart</button>
    </div>
  );
}

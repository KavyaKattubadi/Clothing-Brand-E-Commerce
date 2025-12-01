import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Products(){
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/api/products')
      .then(r=>r.json()).then(d=> setProducts(d.products || d));
  },[]);
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16}}>
        {products.map(p=>(
          <div key={p._id} style={{border:'1px solid #ddd', padding:10}}>
            <img src={p.image} alt={p.name} style={{width:'100%'}}/>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <Link to={'/product/'+p._id}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

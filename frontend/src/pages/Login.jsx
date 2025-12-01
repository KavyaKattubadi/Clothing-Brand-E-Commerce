import React, {useState} from 'react';
export default function Login(){
  const [email,setEmail]=useState(''), [password,setPassword]=useState('');
  const submit = async (e)=>{ e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email,password}), credentials:'include'});
    const data = await res.json();
    if(res.ok) { alert('Logged in'); window.location.href='/'; } else alert(data.message || 'Error');
  };
  return (<div><h2>Login</h2><form onSubmit={submit}><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/><br/><input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/><br/><button>Login</button></form></div>);
}

import React, {useState} from 'react';
export default function Register(){
  const [name,setName]=useState(''), [email,setEmail]=useState(''), [password,setPassword]=useState('');
  const submit = async (e)=>{ e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name,email,password})});
    const data = await res.json();
    if(res.ok) { alert('Registered. Please login.'); window.location.href='/login'; } else alert(data.message || 'Error');
  };
  return (<div><h2>Register</h2><form onSubmit={submit}><input value={name} onChange={e=>setName(e.target.value)} placeholder='name'/><br/><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/><br/><input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/><br/><button>Register</button></form></div>);
}

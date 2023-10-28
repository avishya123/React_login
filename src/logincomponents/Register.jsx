import React from 'react'
import './Register.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {
    const [name,setName]=useState('');
    const [eml,seteml]=useState('');
    const [pwd,setpwd]=useState('');
    const [cpwd,setcpwd]=useState('');
    const navigate=useNavigate()

    const Name=(event)=>{
        setName(event.target.value);
    }
    const Email=(event)=>{
        seteml(event.target.value);
    }
    const Password=(event)=>{
        setpwd(event.target.value);
    }
    const Cpassword=(event)=>{
        setcpwd(event.target.value);
    }
    const Click=(event)=>{
         event.preventDefault();
         navigate("/login");
    }
  return (
    <div>
        <div className='para'>
          <h1><b>REGISTER FORM</b></h1>
          <input type="text" placeholder='Enter your name'  value={name} onChange={Name}/> <br /><br />
          <input type="email" placeholder='Enter your email' value={eml} onChange={Email}/> <br /><br />
          <input type="password" placeholder='Create a password'  value={pwd} onChange={Password}/> <br /><br />
          <input type="password" placeholder='Confirm  password' value={cpwd} onChange={Cpassword}/> <br /><br />
           <button className='btn' onClick={Click} >Register Now</button>
        </div>
    </div>
  )
}

export default Register
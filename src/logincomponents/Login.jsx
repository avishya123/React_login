import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
   
     const [email,setEmail]=useState('');  
     const [pwd,setPwd]=useState('');
     const navigate=useNavigate()
     const HandleEmail=(event)=>{
        setEmail(event.target.value);
     }  
     const HandlePassword=(event)=>{
        setPwd(event.target.value);
     }   
     const HandleEvent=(event)=>{
        event.preventDefault();
      //   console.log("login successfully");
        navigate("/register");
     }   
  return (
    <div style={{backgroundColor:"blue"}}>
        <div style={{textAlign:"center",boxShadow:"2px 5px 7px",padding:"10px",height:"400px",width:"350px",margin:"50px",marginLeft:"500px",backgroundColor:"white"}}>
        <h1 style={{color:"blue",fontSize:"30px"}}>LOGIN</h1>
        <h3>Email : </h3><br />
        <input type="email"  onChange={HandleEmail} value={email} style={{borderTop:"2px",borderLeft:"none",borderRight:"none"}} /> <br /><br />
        <h3>Password : </h3><br />
        <input type="password" onChange={HandlePassword} value={pwd}  style={{borderTop:"2px",borderLeft:"none",borderRight:"none"}}/> <br /><br /><br />
        <button className='login' onClick={HandleEvent} style={{backgroundColor:"blue", borderRadius:"5px",color:"white",fontSize:"20px"}}>Login</button>
        </div>
    </div>
  )
}

export default Loginpage
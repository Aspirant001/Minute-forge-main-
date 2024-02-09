import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'
import './start.css';
import Image from "./mainlogo.png";
// import user_icon from "../assets/person.png";
import email_icon from './email.png'
import password_icon from "./password.png";


function Login() {
    const history = useNavigate();
    // const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/homepage",{state:{id:email}})

                }
                else if(res.data=="notexist"){
                    alert("User does not exist")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e) {
            console.log(e);

        }
    }
  return (
    <>
    <div className="loginsignup">
    <div className='loginpage'>
    <div className="Heading">
        <br />
        <h1>
          <img src={Image} alt="Logo" className="logo" />
          Minutes Forge
        </h1>
      </div>
      <div className="container1">
      <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        
        
    <form action="POST">
    <div className="input">
            <img src={email_icon} alt="" />
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='email' /></div><br /><br />
        <div className="input">
            <img src={password_icon} alt="" />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='password'/></div>

        <input className='submit-container' type="submit" onClick={submit} />
    </form>
    <br />
    <br />
    
    <p>Not a Member?</p><div className='link-signup'>
    <Link to= "/signup">Sign Up!</Link>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}


export default Login
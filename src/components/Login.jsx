import axios from 'axios';
import React from 'react';
import {useState} from "react";
import {toast} from "react-toastify";
import "../styles/login.css";

const Login = ({ setLoginToken }) => {

    const [userInfo,setUserInfo] = useState({
        email:"",
        password:""
    });

    const loginhandler=(e)=>{  
        e.preventDefault();  
        axios.get("http://localhost:8882/addressbook/login",{
         headers:{
             'email':userInfo.email,
                'password':userInfo.password
            }
        }).then((response)=>{
            console.log(response.data.data);
            localStorage.setItem("loginToken",response.data.data);
            setLoginToken(response.data.data);
            toast.success('Login Successfully!');
            
        }).catch(error =>{
            toast.error("Something Went Wrong!");
            console.log(error);
        })
        }


    return (
        <div className="form_container">
            <div className="form_content">
            <form className='row' onSubmit={(e)=>loginhandler(e)}>
            <div className="input_box_login">
                <label className="loginlabel" htmlFor="email">Email</label>
                <input className='input' type="text" name="email" id="email" value={userInfo.email}
                 onChange={(e)=>{setUserInfo({...userInfo, email:e.target.value})}} placeholder='your@email' />
            </div>
            <div className="input_box">
                <label className="loginlabel" htmlFor="password">Password</label>
                <input className='full-width' type="password" name="password" id="password" value={userInfo.password}
                 onChange={(e)=>{setUserInfo({...userInfo, password:e.target.value})}} placeholder='password' />
            </div>
            <div className="loginButton">
                <input  type="submit" value="Login" className="login_btn" />
            </div>
        </form>

            </div>
        </div>
        
    )
}

export default Login

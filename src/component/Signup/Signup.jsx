
import { Col, Image, Row } from 'react-bootstrap';
import './Signup.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";



const Signup = () => {



    return (

        <>

            <div className='text-center'>
<div className="sign-wel">
                   <div className='signup-logo'>
                <Image src="Images/signup-logo.png"></Image>
               </div>
               <div className='welcome'>
                <Image src="Images/welcome-miyagi.png"></Image>
                <p>By signing up you are agreeing our <span>Term and privacy policy</span></p>
                <div className='email-btn'>
                <Link to="/">Email Address</Link>
               </div>
               </div>
</div>
               <div className="signup-bg">
                <p>OR</p>
                <div className="login-with">
                    <Link to="/"><Image src="Images/google.png"></Image>Login with Google</Link>
                    <Link to="/"><Image src="Images/apple.png"></Image>Login with Apple</Link>
                </div>
               </div>
            </div>

        </>
    );
}

export default Signup;





            <div className='text-center'>
                <div className="header">
                   <div className='miyagi-logo'>
                       <Image src="Images/blacklogo.svg"></Image>
                   </div>
                   <div className='menu'>
                       <Image src="Images/menu.svg"></Image>
                   </div>
                </div>
                <div className="welcome">
                    <Image src="Images/welcome-miyagi.png"></Image>
                </div>
                <div className="drag-bg">
                <div className="login-with">
                    <Link to="/"><Image src="Images/drag.svg"></Image>Drag and Drop</Link>
                </div>
               </div>
            </div>
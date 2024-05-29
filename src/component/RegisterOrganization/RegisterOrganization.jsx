
import { Col, Image, Row } from 'react-bootstrap';
import './RegisterOrganization.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";



const RegisterOrganization = () => {



    return (

        <>

            <div className='main-content mt-5 text-center'>
               <div className='logo-register'>
                <Image src="Images/blacklogo.svg"></Image>
                <Link to="/">Register Later</Link>
               </div>
               <h2 className='heading'>Register your organistion on <span>Miyagi,</span></h2>
               <span className='circle'><Image src="Images/ellips.svg"></Image></span>
               <div className='organisation'>
                <h2>Name of the Organistion</h2>
                <Link to="/">Website Link</Link>
                <p>Phone No.</p>
               </div>
               <div className='btn'>
                <Link to="/">Your Designation at the organition</Link>
                <Link to="/">Begin the verification</Link>
               </div>
            </div>

        </>
    );
}

export default RegisterOrganization;

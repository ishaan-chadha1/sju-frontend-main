
import './CreateContract.css';

import React from "react";


const ContractRecepient = () => {

    return (
        <div className='main-content mt-5'>


            {/* <Row className='contract-tables mt-5'>
                <Col lg={6}>
                    <div className='contract-heading'>
                        <h2>Contract Settings</h2>
                        <p>Once Submitted, these settiings cannot be changed</p>
                    </div>
                    <div className='contract-info'>
                        <div className='contract-name'>
                            <h2>Contract name</h2>
                            <p>Contract name should not exceed 200 characters.</p>
                            <input type="text" placeholder='Activity 1 - Googles' className='activity'></input>
                        </div>
                        <div className='contract-encryption'>
                            <div className='contract-flex'>
                                <div className='encryption-info'>
                                    <h2>Contract Encryption ?</h2>
                                    <p>All recipients need this password to decrypt and viwq the contract</p>
                                </div>
                                <div className='switch'>
                                    <div class="toggle-button-cover">
                                        <div class="button-cover">
                                            <div class="button r" id="button-1">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="knobs"></div>
                                                <div class="layer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='setting-password'>
                                <input type="password" placeholder="Enter Password" id="passwordField" className='activity'></input>
                                <span><Image src='Images/homepage/eyeicon.svg' /></span>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col lg={6}>
                    <div className='contract-heading'>
                        <h2>Contract Settings</h2>
                        <p>Once Submitted, these settiings cannot be changed</p>
                    </div>
                    <div className='contract-info'>
                        <div className='contract-expirstion'>
                            <div className='contract-flex'>
                                <div className='expirstion-info'>
                                    <h2>Set Contract Expirstion</h2>
                                    <p>The contract becomes read -only after this date</p>
                                </div>
                                <div className='switch'>
                                    <div class="toggle-button-cover">
                                        <div class="button-cover">
                                            <div class="button r" id="button-1">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="knobs"></div>
                                                <div class="layer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="datepicker" placeholder='DD/MM/YY HH:MM:SS' className='activity'></input>
                            <p className='margin-top'>The contract will be marked as completed and stored on chain after this date.</p>
                        </div>
                    </div>
                </Col>
            </Row> */}

        </div>

    );
}

export default ContractRecepient;

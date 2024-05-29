import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Col, Image, Row } from 'react-bootstrap';
import './CreateContract.css';


const WizardForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="">
            <Form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div >
                        <div className='invite'>
                            <h2>Contract Recipients</h2>
                            <p>Review your signers and viewers</p>
                        </div>

                        <Table className="folders-table-1" responsive>
                            <tr className="table-heading">
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Telegram</th>
                                <th>Wallet Address</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td className='center'>mfaraz568</td>
                                <td className='center'>mfaraz568@gmail.com</td>
                                <td className='center'>Add telegram handle</td>
                                <td className='center'>Add wallet address</td>
                                <td className='center'><Image src='Images/esign/actionicon.svg' /></td>
                            </tr>
                        </Table>
                        <Row className='contract-tables mt-5'>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
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
                                            <input type="date" placeholder='DD/MM/YY HH:MM:SS' className='activity'></input>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
                                    <div className='contract-heading'>
                                        <h2>Sender's Message</h2>
                                        <p>Send customized message to contract recipients. this message will not be stored anywhere or encrypted.</p>
                                    </div>
                                    <div className='message-info'>
                                        <div className='textarea'>
                                            <textarea type="text" placeholder='You can use this field as a password hint, “thie password is the time we first met”,' className='message'></textarea>
                                            <p>Character remaining : 1000</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>
                )}

                {step === 2 && (
                    <div >
                        <Row className='contract-tables mt-5'>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
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
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
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
                                            <input type="date" placeholder='DD/MM/YY HH:MM:SS' className='activity'></input>
                                            <p className='margin-top'>The contract will be marked as completed and stored on chain after this date.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                )}
                {step === 3 && (
                    <div >
                        <div className="selectfilter mt-3 mb-4">

                            <div className="search">
                                <span><Image src='Images/search.svg' /></span>
                                <input type="search" placeholder='Search Document' />
                            </div>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="docdetail">
                                    <h4>Document Details</h4>
                                    <div className="contactname">
                                        <h6>Contract name:</h6>
                                        <span>Activity 1 - Googles</span>
                                    </div>
                                    <div className="contactname">
                                        <h6>Creation Date :</h6>
                                        <span>2024-01-21 13:46:19 +0530</span>
                                    </div>
                                    <div className="contactname">
                                        <h6>Document Key :</h6>
                                        <span>Es-FaCWab8svFN0LK4uRQs9u</span>
                                    </div>
                                    <div className="contactname  border-top-1">
                                        <h6>Signing Activity</h6>
                                        <div className="activename">
                                            <span>
                                                <i></i>
                                            </span>
                                            <div className="activedetail">
                                                <h6>mfaraz568</h6>
                                                <p>mfaraz568@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="docdetail">
                                    <h4>Activity 1 - Googles</h4>
                                    <div className="contactname text-center pb-4">
                                        <Image src='Images/esign/notice.png' />
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                )}

                <div className='back-next mt-3 w-100'>

                    {step > 1 && (
                        <Button onClick={handlePrev} className='backbtn'>
                            <Image src='Images/esign/backicon.svg' />  Back
                        </Button>
                    )}
                    {step > 2 && (
                        <Button onClick={handlePrev} className="d-none">
                            Back
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button variant="primary" onClick={handleNext} className="nextbtn">
                            Next <Image src='Images/esign/nexticon.svg' />
                        </Button>
                    ) : (
                        <Button type="submit" variant="success" className="d-none">
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default WizardForm;

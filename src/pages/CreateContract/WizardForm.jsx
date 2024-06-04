import React, { useState } from "react";
import { Button, Form, Table, Col, Image, Row } from "react-bootstrap";
import { useContract } from '../../ContractContext';
import './CreateContract.css';

const WizardForm = () => {
    const { contractData, setContractData, invitedSigners, file } = useContract();
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContractData((prevData) => ({
            ...prevData,
            [name]: value,
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
        console.log(contractData);
    };

    const handleReviewAndSend = () => {
        const data = new FormData();
        data.append('contractName', contractData.contractName);
        data.append('message', contractData.message);
        data.append('signers', JSON.stringify(invitedSigners));
        data.append('file', file);

        fetch('YOUR_BACKEND_API_URL', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="">
            <Form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <Table className="folders-table-1" responsive>
                            <tbody>
                                {invitedSigners.map((signer, index) => (
                                    <tr key={index}>
                                        <td className='center'>{signer.name}</td>
                                        <td className='center'>{signer.email}</td>
                                        <td className='center'>Add telegram handle</td>
                                        <td className='center'>Add wallet address</td>
                                        <td className='center'><Image src='Images/esign/actionicon.svg' /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Row className='contract-tables mt-5'>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
                                    <div className='contract-heading'>
                                        <h2>Contract Settings</h2>
                                        <p>Once Submitted, these settings cannot be changed</p>
                                    </div>
                                    <div className='contract-info'>
                                        <div className='contract-name'>
                                            <h2>Contract name</h2>
                                            <p>Contract name should not exceed 200 characters.</p>
                                            <input
                                                type="text"
                                                name="contractName"
                                                value={contractData.contractName}
                                                onChange={handleChange}
                                                placeholder='Enter Contract Name'
                                                className='activity'
                                            />
                                        </div>
                                        <div className='contract-encryption'>
                                            <div className='contract-flex'>
                                                <div className='encryption-info'>
                                                    <h2>Contract Encryption?</h2>
                                                    <p>All recipients need this password to decrypt and view the contract</p>
                                                </div>
                                                <div className='switch'>
                                                    <div className="toggle-button-cover">
                                                        <div className="button-cover">
                                                            <div className="button r" id="button-1">
                                                                <input type="checkbox" className="checkbox" />
                                                                <div className="knobs"></div>
                                                                <div className="layer"></div>
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
                        </Row>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <Row className='contract-tables mt-5'>
                            <Col lg={6}>
                                <div className="h-100 contsetting">
                                    <div className='contract-heading'>
                                        <h2>Contract Settings</h2>
                                        <p>Once Submitted, these settings cannot be changed</p>
                                    </div>
                                    <div className='contract-info'>
                                        <div className='contract-name'>
                                            <h2>Contract name</h2>
                                            <p>Contract name should not exceed 200 characters.</p>
                                            <input
                                                type="text"
                                                name="contractName"
                                                value={contractData.contractName}
                                                onChange={handleChange}
                                                placeholder='Enter Contract Name'
                                                className='activity'
                                            />
                                        </div>
                                        <div className='contract-encryption'>
                                            <div className='contract-flex'>
                                                <div className='encryption-info'>
                                                    <h2>Contract Encryption?</h2>
                                                    <p>All recipients need this password to decrypt and view the contract</p>
                                                </div>
                                                <div className='switch'>
                                                    <div className="toggle-button-cover">
                                                        <div className="button-cover">
                                                            <div className="button r" id="button-1">
                                                                <input type="checkbox" className="checkbox" />
                                                                <div className="knobs"></div>
                                                                <div className="layer"></div>
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
                                        <p>Once Submitted, these settings cannot be changed</p>
                                    </div>
                                    <div className='contract-info'>
                                        <div className='contract-encryption'>
                                            <div className='contract-flex'>
                                                <div className='encryption-info'>
                                                    <h2>Set Contract Expiration</h2>
                                                    <p>The contract becomes read-only after this date</p>
                                                </div>
                                                <div className='switch'>
                                                    <div className="toggle-button-cover">
                                                        <div className="button-cover">
                                                            <div className="button r" id="button-1">
                                                                <input type="checkbox" className="checkbox" />
                                                                <div className="knobs"></div>
                                                                <div className="layer"></div>
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
                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="docdetail">
                                    <h4>Document Details</h4>
                                    <div className="contactname">
                                        <h6>Contract name:</h6>
                                        <h2>{contractData.contractName}</h2>
                                    </div>
                                    <div className="contactemail">
                                        <h6>Recipient:</h6>
                                        <h2>John Doe</h2>
                                    </div>
                                    <div className="contactemail">
                                        <h6>Company Name:</h6>
                                        <h2>Acme Corp</h2>
                                    </div>
                                    <div className="contactfile">
                                        <h6>File Name:</h6>
                                        <h2>{file ? file.name : 'No file uploaded'}</h2>
                                    </div>
                                    <div className="contactsigners">
                                        <h6>Invited Signers:</h6>
                                        <ul>
                                            {invitedSigners.map((signer, index) => (
                                                <li key={index}>{signer.name} ({signer.email})</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="contactemail">
                                        <h6>Sender's Message:</h6>
                                        <p>{contractData.message}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}

                <div className="wizard-buttons">
                    {step > 1 && (
                        <Button variant="secondary" onClick={handlePrev}>
                            Previous
                        </Button>
                    )}
                    {step < 3 && (
                        <Button variant="primary" onClick={handleNext}>
                            Next
                        </Button>
                    )}
                    {step === 3 && (
                        <Button variant="primary" type="submit" onClick={handleReviewAndSend}>
                            Review and Send
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default WizardForm;

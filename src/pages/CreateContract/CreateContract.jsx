import { Col, Image, Row, Table, Modal, Button, Card, CardGroup, Tabs, Tab, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './CreateContract.css';
import FileUpload from '../../component/FileUpload/FileUpload';
import WizardForm from './WizardForm';

const CreateContract = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteDetails, setInviteDetails] = useState({ name: '', email: '' });
    const [invitedSigners, setInvitedSigners] = useState([]);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleCloseInviteModal = () => setShowInviteModal(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShowInviteModal = () => setShowInviteModal(true);

    const handleInviteChange = (e) => {
        const { name, value } = e.target;
        setInviteDetails({ ...inviteDetails, [name]: value });
    };

    const handleInviteSubmit = () => {
        setInvitedSigners([...invitedSigners, inviteDetails]);
        setInviteDetails({ name: '', email: '' });
        handleCloseInviteModal();
    };
    return (
        <div className='main-content mt-5'>
            <div className="managecontract">
                <div className="contractname d-flex">
                    <Link to="/Esign"><Image src='Images/esign/leftarrow.svg'></Image></Link>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Upload Contract">
                            <div className="uploadtitle">
                                <h2>Upload Contract</h2>
                                <p>Upload a document that you wish to send.</p>
                            </div>
                            <FileUpload />

                            {/* <div className="selecttemplete">
                                <div className="selectfilter">
                                    <h4>Select From Template</h4>
                                    <select id="FilterSelect">
                                        <option value="all">All</option>
                                        <option value=".category-1">Category 1</option>
                                        <option value=".category-2">Category 2</option>
                                    </select>
                                </div>
                                <CardGroup>
                                    <Card>
                                        <div className="cardimg">
                                            <Card.Img variant="top" src="Images/esign/invoice.png" />
                                        </div>
                                        <Card.Body>

                                            <Card.Text>
                                                <span>Business Transaction</span>
                                                <Link variant="primary" onClick={handleShow}>Inovice<Image src='Images/esign/invoiceicon.svg' /></Link>
                                                <p>Jurisdiction : <span>Worldwide</span></p>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                    <Card>
                                        <div className="cardimg">
                                            <Card.Img variant="top" src="Images/esign/invoice.png" />
                                        </div>
                                        <Card.Body>

                                            <Card.Text>
                                                <span>Business Operations</span>
                                                <Link variant="primary" onClick={handleShow2}>Partnership Agreement<Image src='Images/esign/invoiceicon.svg' /></Link>
                                                <p>Jurisdiction : <span>Worldwide</span></p>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                    <Card>
                                        <div className="cardimg">
                                            <Card.Img variant="top" src="Images/esign/invoice.png" />
                                        </div>
                                        <Card.Body>

                                            <Card.Text>
                                                <span>Intellectual Property</span>
                                                <Link variant="primary" onClick={handleShow3}>Non-Disclosure Agreement<Image src='Images/esign/invoiceicon.svg' /></Link>
                                                <p>Jurisdiction : <span>Worldwide</span></p>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                    <Card>
                                        <div className="cardimg">
                                            <Card.Img variant="top" src="Images/esign/invoice.png" />
                                        </div>
                                        <Card.Body>

                                            <Card.Text>
                                                <span>Employment</span>
                                                <Link to="/">Employment Contract<Image src='Images/esign/invoiceicon.svg' /></Link>
                                                <p>Jurisdiction : <span>Worldwide</span></p>
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </CardGroup>
                            </div> */}

                        </Tab>
                        <Tab eventKey="profile" title="Invite Signers">
                            <div className='invite'>
                                <h2>Invite Signers</h2>
                                <p>Invite signers by email addresses, Telegram Handles, or wallet addresses.</p>
                                <Button variant="primary" onClick={handleShowInviteModal}>
                                  Invite Signer
                                </Button>
                            </div>

                            <Table className="folders-table-1" responsive>
                                <thead>
                                    <tr className="table-heading">
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Telegram</th>
                                        <th>Wallet Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
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

                            <Modal show={showInviteModal} onHide={handleCloseInviteModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Invite Signer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group controlId="inviteName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={inviteDetails.name}
                                                onChange={handleInviteChange}
                                                placeholder="Enter signer's name"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="inviteEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={inviteDetails.email}
                                                onChange={handleInviteChange}
                                                placeholder="Enter signer's email"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseInviteModal}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleInviteSubmit}>
                                        Add Signer
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Tab>
                        <Tab eventKey="contact" title="Add Fields">
                            <div className="selectfilter mt-3">
                                <h4>Add Fields</h4>
                                <div className="search">
                                    <span><Image src='Images/search.svg' /></span>
                                    <input type="search" placeholder='Search Document' />
                                </div>
                            </div>
                            <ul className='assignfield'>
                                <li>
                                    <div className="assignfieldsub">
                                        <span> <Image src='Images/esign/assignicon.png' /></span>
                                        <Image src='Images/esign/user.svg' />
                                        <p>mfaraz568</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="assignfieldsub">
                                        <span> <Image src='Images/esign/required.png' /></span>
                                        <Image src='Images/esign/pencil.svg' />
                                        <p>Signature Field</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="assignfieldsub">

                                        <Image src='Images/esign/date.svg' />
                                        <p>Date Signed</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="assignfieldsub">

                                        <Image src='Images/esign/input.svg' />
                                        <p>Input Text Field</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="assignfieldsub">

                                        <Image src='Images/esign/readonly.svg' />
                                        <p>Read Only Text</p>
                                    </div>
                                </li>
                            </ul>

                            {/* <div className="activity mt-5">
                                <h4 className='mb-5'> Activity 1 - Googles</h4>
                                <Image src='Images/esign/activity.png' className='m-auto' />
                            </div> */}
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
                        </Tab>
                        <Tab eventKey="review" title="Review and Send">
                            <div className=" mt-3 mb-4">

                                <WizardForm />
                            </div>

                        </Tab>
                    </Tabs>

                </div>

            </div>


            <Modal show={show} size="lg" dialogClassName="modal-90w" onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body >

                    <div className="templetemodal">
                        <div className="modaltitle">
                            <div className="temtitle d-flex">
                                <h4>Non-Disclosure Agreement <Image src='Images/esign/invoiceicon.svg' className='ml-2' /> </h4>
                                <Link to="/" className=''>waiver and release of liability</Link>
                            </div>
                            <p>this is template of waiver and release of liability.</p>
                        </div>
                        <Link to="" className='btnblue'>use this Template</Link>
                    </div>
                    <div className="contractmodalbody">
                        <div className="bgwhite">
                            <h5>General Release Of Liability Form</h5>
                            <p>i, HEREBY ASSUME ALL OF THE RISKS OF PARTICIPATING IN ANA/ALL ACTIVITIES</p>
                            <p>Being conducted by HOST, including by way of example and not limitation, any risks that many arise from negligence or carelessness on the part of the person or entities being released, frm dangerous or defective equipment or property owned, maintained, or controlled by them , or because of therir possible liability without fault. </p>
                            <p>Being conducted by HOST, including by way of example and not limitation, any risks that many arise from negligence or carelessness on the part of the person or entities being released, frm dangerous or defective equipment or property owned, maintained, or controlled by them , or because of therir possible liability without fault. </p>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className="modalfooter">
                        <ul className='modalcontent'>
                            <li><span> Contract Type : </span> Intellectual Property</li>
                            <li><span>Applicable jurisdictions :</span> Worldwide</li>
                            <li><span>Created By :</span> EthSign</li>
                        </ul>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} dialogClassName="modal-90w" onHide={handleClose2} className='contract'>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body >

                    <div className="templetemodal d-block">
                        <div className="modaltitle">
                            <div className="temtitle d-block">
                                <h4>How do you want to send the contract? </h4>
                                <p>Choose how you want to send your contract. Generating signing links is suitable if you are collecting signatures from a number of  Signers.</p>
                            </div>

                        </div>
                        <ul className='usertempl'>
                            <li>
                                <input type="radio" className='userinviteradio' name='userinviteradio' checked />
                                <div className="userinvite">
                                    <Image src='Images/homepage/inviteuser.svg'></Image>
                                    <h4>Invite Signers</h4>
                                    <p>Fundraising contracts, employment contracts, etc..</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" className='userinviteradio' name='userinviteradio' />
                                <div className="userinvite">
                                    <Image src='Images/homepage/genratelink.svg'></Image>
                                    <h4>generate Signing Links</h4>
                                    <p>NDAs, terms of services, payments, DAO member agreements, etc.</p>
                                </div>
                            </li>
                        </ul>
                        <Link to="" className='btnblue' closeButton variant="primary" onClick={handleClose2}>Continue</Link>
                    </div>


                </Modal.Body>

            </Modal>
            <Modal show={show3} dialogClassName="modal-90w" onHide={handleClose3} className='contract'>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body >

                    <div className="templetemodal d-block">
                        <div className="modaltitle">
                            <div className="temtitle d-block">
                                <h4>Share Contract Signing Link </h4>
                                <p>Anyone with the link can sign the contract.</p>
                            </div>

                        </div>
                        <div className="copymsg">
                            <p>0xA0Ae84...F18daDD7 sent you a document to sign. open the link and input the password to sign the contract. <br></br><br></br>Contract Link :https:/app.mesprotocol.com/spot/eth-usdc</p>
                            <div className="copybutton">
                                <Link to="" className='btn-white'><Image src='Images/homepage/copy.svg' /> Copy Message</Link>
                                <Link to="" className='btn-blue'>Share With Email</Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>

    );
}

export default CreateContract;

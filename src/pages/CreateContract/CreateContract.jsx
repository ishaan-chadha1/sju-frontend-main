import { Col, Image, Row, Table, Modal, Button, Tabs, Tab, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from "react";
import './CreateContract.css';
import WizardForm from './WizardForm';
import { useContract } from '../../ContractContext';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import FileUpload from '../../component/FileUpload/FileUpload';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const CreateContract = () => {
    const { file, setFile, contractData, setContractData, invitedSigners, setInvitedSigners } = useContract();
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteDetails, setInviteDetails] = useState({ name: '', email: '' });
    const pdfCanvasRef = useRef(null);
    const [loadedPdf, setLoadedPdf] = useState(null);

    const handleCloseInviteModal = () => setShowInviteModal(false);
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

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
            const arrayBuffer = event.target.result;
            if (arrayBuffer instanceof ArrayBuffer) {
                const typedArray = new Uint8Array(arrayBuffer);

                const loadedPdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
                setLoadedPdf(loadedPdf);
                renderPage(1, loadedPdf); // Render the first page
            }
        };
        fileReader.readAsArrayBuffer(selectedFile);
    };

    const renderPage = async (pageNumber, loadedPdf) => {
        if (!loadedPdf) {
            console.error('PDF is not loaded');
            return;
        }

        const page = await loadedPdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = pdfCanvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;
    };

    const handleContractDataChange = (e) => {
        const { name, value } = e.target;
        setContractData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const data = new FormData();
        data.append('file', file);
        data.append('contractName', contractData.contractName);
        data.append('message', contractData.message);
        data.append('signers', JSON.stringify(invitedSigners));

        console.log({
            file,
            ...contractData,
            invitedSigners
        });

        fetch('https://upload-final-85xn.vercel.app/upload', {
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
        <div className='main-content mt-5'>
            <div className="managecontract">
                <div className="contractname d-flex">
                    <Link to="/Esign"><Image src='Images/esign/leftarrow.svg'></Image></Link>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Upload Contract">
                                <div className="uploadtitle">
                                    <h2>Upload Contract</h2>
                                    <p>Upload a document that you wish to send.</p>
                                </div>
                                <FileUpload onFileChange={handleFileChange} />
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invitedSigners.map((signer, index) => (
                                        <tr key={index}>
                                            <td className='center'>{signer.name}</td>
                                            <td className='center'>{signer.email}</td>
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
                                        <Form.Group style={{paddingTop:'10px'}} controlId="inviteEmail">
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
                        <Tab eventKey="contact" title="Add A Note">
                            <div className="selectfilter mt-3 mb-5">
                                <h4>Add A Note</h4>
                            </div>
                            
                            <div className="h-100 contsetting">
                                <div className='contract-heading'>
                                    <h2>Sender's Message</h2>
                                    <p>Send customized message to contract recipients. this message will not be stored anywhere or encrypted.</p>
                                </div>
                                <div className='message-info'>
                                    <div className='textarea'>
                                        <textarea 
                                            type="text" 
                                            placeholder='You can use this field as a password hint, “the password is the time we first met”' 
                                            className='message'
                                            name="message"
                                            value={contractData.message}
                                            onChange={handleContractDataChange}
                                        />
                                        <p>Character remaining: 1000</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="review" title="Review and Send">
                            <div className="mt-3 mb-4">
                                <WizardForm invitedSigners={invitedSigners} />
                            </div>
                            <div className="pdf-preview mt-3">
                                <canvas ref={pdfCanvasRef} style={{ width: '50%', border: '1px solid #ccc' }}></canvas>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default CreateContract;

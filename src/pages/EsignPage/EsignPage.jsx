import React, { useState } from "react";
import { Image, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EsignPage.css';
import FileUpload from '../../component/FileUpload/FileUpload';
import TableDropdown from '../../component/TableDropdown/TableDropdown';

const EsignPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleShowModal = (file) => {
        setSelectedFile(file);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFile(null);
    };

    const files = [
        {
            name: "DNA_Storage_Research_Landscape...",
            lastModified: "January 04, 2024",
            sentBy: "Farraz",
            address: "0xA0Ae84...F18daDD7",
            signingStatus: "0/1 Signed",
            status: "Pending Others"
        }
    ];

    return (
        <div className='main-content mt-5'>
            <div className="managecontract">
                <div className="contractname">
                    <h4>Manage Contracts</h4>
                    <p>View, sign, manage, and download your contracts here.</p>
                </div>
                <Link to="/createcontract" className='esign btnblue'>
                    <Image src='Images/esign/upload.svg' />Create New Contract
                </Link>
            </div>
            <div className="notice">
                <Image src='Images/esign/pendingicon.svg' />
                <p>Sent contract file will be immediately encrypted for secure transmission. Eth sign will have no access to the contract’s and it will be stored on-chain after all signers have completed signatures.</p>
            </div>
            {/* <FileUpload /> */}
            <Table className="folders-table-1 mt-5" responsive>
                <thead>
                    <tr className="table-heading">
                        <th></th>
                        <th>Contract Name</th>
                        <th>Sent by</th>
                        <th>Signing Status</th>
                        <th>Status</th>
                        <th className='actionmain'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr className='table-hover' key={index} onClick={() => handleShowModal(file)}>
                            <td><input type="checkbox" name='check' /></td>
                            <td className='center'>
                                <div className="docdetailmain">
                                    <Image src='Images/homepage/document.svg' />
                                    <div className="docmaindetail">
                                        <h4>{file.name}</h4>
                                        <p>last Modified: {file.lastModified}</p>
                                    </div>
                                </div>
                            </td>
                            <td className='center'>
                                <h4>{file.sentBy}</h4>
                                <p>{file.address}</p>
                            </td>
                            <td className='center'>
                                {file.signingStatus}
                            </td>
                            <td className='center'>
                                <Link to="" className='linkoffer'>{file.status}</Link>
                            </td>
                            <td className='center'>
                                <div className="viewcontract">
                                    <label htmlFor={`checkdropdown${index}`} >
                                        <input type="checkbox" id={`checkdropdown${index}`} name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <TableDropdown />
                                    </label>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectedFile && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contract Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{selectedFile.name}</h4>
                        <p>Last Modified: {selectedFile.lastModified}</p>
                        <p>Sent by: {selectedFile.sentBy} ({selectedFile.address})</p>
                        <p>Signing Status: {selectedFile.signingStatus}</p>
                        <p>Status: {selectedFile.status}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default EsignPage;

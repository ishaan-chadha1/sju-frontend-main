
import { Col, Image, Row, Table } from 'react-bootstrap';
import './SharedFile.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


const SharedFile = () => {
    const [show, setShow] = useState(false);

    const openmodal = () => {
        setShow(true);
    };

    const closemodal = () => {
        setShow(false);
    };
    return (
        <>
            <div className={`text-center ${show === true ? 'blur-background' : ''}`}>
                <div className='main-content mt-5'>
                    {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
                    <div className="upload-section bsync-section">
                        <Row className='mt-5 mb-5'>
                            <Col lg={6}>
                                <ul className="upload bsync">
                                    <li>
                                        <div>
                                            <h2>Upload data to Blockchain</h2>
                                        </div>
                                        <div className="box b-sync">
                                            <div className="box-content">
                                                <Image src='Images/homepage/upload.svg' />
                                                <h5>Drag & Drop</h5>
                                                <input type="file" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h2>Timestamp/Blockcain E-Sign Document</h2>
                                        </div>
                                        <div className="box b-sync">
                                            <div className="box-content">
                                                <Image src='Images/homepage/drag.svg' />
                                                <h5>Drag & Drop</h5>
                                                <input type="file" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h2>B-Sync</h2>
                                        </div>
                                        <div className="box b-sync">
                                            <div className="box-content">
                                                <Image src='Images/homepage/drag.svg' />
                                                <h5>Drag & Drop</h5>
                                                <input type="file" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <div onClick={openmodal} className="folder-add">
                                        <h2>Folders</h2>
                                        <div className="add-button">
                                            <h3>Add</h3>
                                            <Button><Image src="Images/homepage/add.svg"></Image></Button>
                                        </div>
                                    </div>
                                    <ul className="folder-content">
                                        <li>
                                            <div className="folder-box">
                                                <div className="folderbox-content">
                                                    <Image src="Images/homepage/fileicon.svg"></Image>
                                                    <h5>2020 Planning</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="folder-box">
                                                <div className="folderbox-content">
                                                    <Image src="Images/homepage/fileicon.svg"></Image>
                                                    <h5>2020 Planning</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="folder-box">
                                                <div className="folderbox-content">
                                                    <Image src="Images/homepage/fileicon.svg"></Image>
                                                    <h5>2020 Planning</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <Table responsive className="folders-table-1">
                        <tr className="table-heading">
                            <th>Name</th>
                            <th>Tag</th>

                            <th>Share Date</th>
                            <th className='actionmain'>Action</th>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Documentation Miyagi</h2>
                                </div>
                            </td>
                            <td >
                                <span className="btn-blue">Work</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown" >
                                        <input type="checkbox" id='checkdropdown' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>

                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Magical-Retreat-2020.jpg</h2>
                                </div>
                            </td>
                            <td >
                                <span className="btn-red">Music</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown1" >
                                        <input type="checkbox" id='checkdropdown1' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Use-This-Meme.jpg</h2>
                                </div>
                            </td>
                            <td >
                                <span className="btn-yellow">Bills</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown2" >
                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Documentation</h2>
                                </div>
                            </td>
                            <td >
                                <span className="btn-green">Office</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown3" >
                                        <input type="checkbox" id='checkdropdown3' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Table Documentation</h2>
                                </div>
                            </td>
                            <td>
                                <span className="btn-purple">Video</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown4" >
                                        <input type="checkbox" id='checkdropdown4' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Drigma-Video.mp4</h2>
                                </div>
                            </td>
                            <td>
                                <span className="btn-red">Music</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown5" >
                                        <input type="checkbox" id='checkdropdown5' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-hover'>
                            <td className="table-file">
                                <div className="file-inner">
                                    <Image src='Images/homepage/fileicon.svg' />
                                    <h2>Figma-Tutorial.mp4</h2>
                                </div>
                            </td>
                            <td >
                                <span className="btn-purple">Video</span>
                            </td>



                            <td className='center'>10/28/12</td>

                            <td className='center'>
                                <div className="viewcontract">
                                    <label for="checkdropdown6" >
                                        <input type="checkbox" id='checkdropdown6' name='checkdropdown' />
                                        <Image src='Images/homepage/threedot.svg' />
                                        <ul className='tabledropdown'>
                                            <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:pencil" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:share" /></Link></li>
                                            <li><Link><Icon icon="mdi-light:download" /></Link></li>
                                        </ul>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </Table>
                    <div className="buttons">
                        <div className="checkbutton">

                            <input type="checkbox" className='checked' />

                            <Link className="button1">

                                <div className="fileview">
                                    <h3><Image src='Images/homepage/filerequest.svg'></Image> File Requests</h3>
                                    <ul>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>

                                    </ul>
                                </div>

                                <Image src='Images/homepage/uparrow.svg' />
                                <h2>File Requests</h2>
                            </Link >
                        </div>
                        <div className="checkbutton">

                            <input type="checkbox" className='checked' />
                            <Link className="button2">
                                <div className="fileview bg-lightblue">
                                    <h3><Image src='Images/homepage/bluetransfer.svg'></Image> File Requests</h3>
                                    <ul>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/yellowfolder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/shareicon.svg'></Image></Link>

                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/cd.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/shareicon.svg'></Image></Link>

                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/shareicon.svg'></Image></Link>

                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/document.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/shareicon.svg'></Image></Link>

                                                </div>
                                            </div>

                                        </li>

                                    </ul>
                                </div>
                                <Image src='Images/homepage/transfericon.svg' />
                                <h2>Transfer Files</h2>
                            </Link>
                        </div>
                        <div className="checkbutton checkred">

                            <input type="checkbox" className='checked' />
                            <Link className="button3">
                                <div className="fileview bg-red">
                                    <h3><Image src='Images/homepage/filerequest.svg'></Image> File Requests</h3>
                                    <ul>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="fileoption">
                                                <Image src='Images/homepage/folder.svg'></Image>
                                                <div className="filenamemain">
                                                    <h5>Table Documentation</h5>
                                                    <p>By: Theresa Webb</p>
                                                </div>
                                                <div className="tickcross">
                                                    <Link to="" > <Image src='Images/homepage/tick.svg'></Image></Link>
                                                    <Link to="" > <Image src='Images/homepage/cross.svg'></Image></Link>
                                                </div>
                                            </div>

                                        </li>

                                    </ul>
                                </div>
                                <Image src='Images/homepage/backupicon.svg' />
                                <h2>Backup On-ChainData</h2>
                            </Link>
                        </div>
                    </div >
                </div>
            </div>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='by-model'
            >
                <Modal.Header className='border' style={{ position: 'relative' }} >
                    <ClearIcon
                        onClick={closemodal}
                        style={{ position: 'absolute', right: '0px', cursor: 'pointer', backgroundColor: 'transparent', color: '' }}
                    />
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="popup-title">
                            <Image src='Images/foldericon.svg'></Image>
                            <h2>Create Folder</h2>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup-bg">
                        <div className="popup-content flex-nowrap">
                            <Form.Label htmlFor="inputText">Name</Form.Label>
                            <Form.Control
                                type="Name"
                                id="inputText"
                            />
                        </div>
                        <div className="automation">
                            <h6>Add automation</h6>
                            <div className="automation-bg">
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={type} className="mb-3">
                                            <Form.Check className='flex' type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} isValid />
                                                <Form.Control.Feedback type="valid">
                                                    Set up this folder to automatically handle tasks like organizing your content and converting files. You will set up your automation after we create the folder
                                                </Form.Control.Feedback>
                                            </Form.Check>
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        </div>
                        <div className="cancle-create-btn">
                            <Button>Cancle</Button>
                            <Button className='color-blue'>Create</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default SharedFile;

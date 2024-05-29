
import { Col, Image, Row, Table } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';
import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Icon } from '@iconify/react';


// Your component code



const HomePage = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
            <div className="upload-section">
                <ul className="upload homeupload">
                    <li>
                        <div>
                            <h2>Upload to Decentralise</h2>
                        </div>
                        <div className="box">
                            <Link to="/" className="box-content">
                                <Image src='Images/homepage/upload.svg' />
                                <h5>Drag & Drop</h5>
                                <input type="file" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Upload to the chain</h2>
                        </div>
                        <div className="box">
                            <Link to="/" className="box-content">
                                <Image src='Images/homepage/drag.svg' />
                                <h5>Drag & Drop</h5>
                                <input type="file" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Deltasafe</h2>
                        </div>
                        <div className="box">
                            <Link to="/" className="box-content">
                                <h5>Encrytion upload</h5>
                                <input type="file" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <Link to="/" className="box-content">
                                <h5>Decryption upload</h5>
                                <input type="file" />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="file">
                <h2>Data sort as per file type</h2>
                <div className="file-inner-content">
                    <ul>
                        <li>
                            <div className="file-box">
                                <div className="file-boxes">
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/imageicon.svg"></Image>
                                        <span>Images</span>
                                    </Link>
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/fileicon.svg"></Image>
                                        <span>Files</span>
                                    </Link>
                                </div>
                                <div className="shared-with">
                                    <h3>Shared With :</h3>
                                    <div className="shared-profile">
                                        <span>
                                            <Image src='Images/homepage/shareimg.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg2.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg3.png' />
                                        </span>
                                        <span>+9</span>
                                    </div>
                                </div>
                                <div className="file-last-edit">
                                    <h3>Last Edit: May 3rd 2021</h3>
                                    <Link to="">Open</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="file-box">
                                <div className="file-boxes">
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/videoicon.svg"></Image>
                                        <span>Videos</span>
                                    </Link>
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/fileicon.svg"></Image>
                                        <span>Files</span>
                                    </Link>
                                </div>
                                <div className="shared-with">
                                    <h3>Shared With :</h3>
                                    <div className="shared-profile">
                                        <span>
                                            <Image src='Images/homepage/shareimg.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg2.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg3.png' />
                                        </span>
                                        <span>+9</span>
                                    </div>
                                </div>
                                <div className="file-last-edit">
                                    <h3>Last Edit: May 3rd 2021</h3>
                                    <Link to="">Open</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="file-box">
                                <div className="file-boxes">
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/audioicon.svg"></Image>
                                        <span>Audio</span>
                                    </Link>
                                    <Link to="" className="file-max-box">
                                        <Image src="Images/homepage/fileicon.svg"></Image>
                                        <span>Files</span>
                                    </Link>
                                </div>
                                <div className="shared-with">
                                    <h3>Shared With :</h3>
                                    <div className="shared-profile">
                                        <span>
                                            <Image src='Images/homepage/shareimg.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg2.png' />
                                        </span>
                                        <span>
                                            <Image src='Images/homepage/shareimg3.png' />
                                        </span>
                                        <span>+9</span>
                                    </div>
                                </div>
                                <div className="file-last-edit">
                                    <h3>Last Edit: May 3rd 2021</h3>
                                    <Link to="">Open</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="file-mini-box">
                                <Link to="/" className="file-mini-box1">
                                    <h3>View Participants</h3>
                                </Link>
                                <Link to="/" className="file-mini-box1">
                                    <h3>Add Participant</h3>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3 hometab"
                fill
            >
                <Tab eventKey="home" title="Personal Information">
                    <div className="folders">
                        <h2>Recently accessed folders</h2>
                        <div className="folders-table">
                            <Row>
                                <Col lg={6}>
                                    <Table className="folders-table-1" responsive>
                                        <tr className="table-heading">
                                            <th>File</th>
                                            <th>Size</th>
                                            <th>Accessed By</th>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="center">Mail List</td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="center">Mail List</td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="center">Mail List</td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="center">Mail List</td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="center">Mail List</td>
                                        </tr>
                                    </Table>
                                </Col>
                                <Col lg={6}>
                                    <Table responsive className="folders-table-1">
                                        <tr className="table-heading">
                                            <th>Docu.Type</th>
                                            <th>Person</th>
                                            <th>Organisation</th>
                                            <th>Tag</th>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                            <td className="music-box">

                                                <div className="viewcontract musicbox-dropdown">
                                                    <label for="checkdropdown2" >
                                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                                        <Image src='Images/homepage/threedot.svg' />
                                                        <ul className='tabledropdown trashfile bsyncfile homepage'>
                                                            <li><Icon icon="mdi-light:music" /> Music</li>
                                                            <li><Icon icon="material-symbols-light:work-outline" /> Work</li>
                                                            <li className='bill'><Icon icon="solar:bill-check-outline" /> Bills</li>
                                                        </ul>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                            <td className="music-box">

                                                <div className="viewcontract">
                                                    <label for="checkdropdown2" >
                                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                                        <Image src='Images/homepage/threedot.svg' />
                                                        <ul className='tabledropdown trashfile bsyncfile homepage'>
                                                            <li>Music</li>
                                                            <li>Work</li>
                                                            <li>Bills</li>
                                                        </ul>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                            <td className="music-box">

                                                <div className="viewcontract">
                                                    <label for="checkdropdown2" >
                                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                                        <Image src='Images/homepage/threedot.svg' />
                                                        <ul className='tabledropdown trashfile bsyncfile homepage'>
                                                            <li>Music</li>
                                                            <li>Work</li>
                                                            <li>Bills</li>
                                                        </ul>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                            <td className="music-box">

                                                <div className="viewcontract">
                                                    <label for="checkdropdown2" >
                                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                                        <Image src='Images/homepage/threedot.svg' />
                                                        <ul className='tabledropdown trashfile bsyncfile homepage'>
                                                            <li>Music</li>
                                                            <li>Work</li>
                                                            <li>Bills</li>
                                                        </ul>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='table-hover'>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                            <td className="music-box">

                                                <div className="viewcontract">
                                                    <label for="checkdropdown2" >
                                                        <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                                        <Image src='Images/homepage/threedot.svg' />
                                                        <ul className='tabledropdown trashfile bsyncfile homepage'>
                                                            <li>Music</li>
                                                            <li>Work</li>
                                                            <li>Bills</li>
                                                        </ul>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                {/* <Col lg={6}>
                            <Table responsive className="folders-table-1">
                                <tr className="table-heading">
                                    <th>Docu.Type</th>
                                    <th>Person</th>
                                    <th>Organisation</th>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Jaideep</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Isaiah</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Firas</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Dada</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Imaad</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                            </Table>
                        </Col> */}
                            </Row>
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
                                {/* <div className="checkbutton checkred">

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
                                            <div className="fileoption col-lg-6 col-md-8 col-sm-12">
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
                        </div> */}
                            </div >

                        </div>
                    </div>
                </Tab>
                <Tab eventKey="home2" title="Personal Information">
                    <div className="folders">
                        <h2>Recently accessed folders</h2>
                        <div className="folders-table">
                            <Row>
                                <Col lg={12}>
                                    <Table responsive className="folders-table-1">
                                        <tr className="table-heading">
                                            <th>File</th>
                                            <th>Size</th>
                                            <th>Tag</th>
                                            <th>Accessed By</th>
                                            <th>Docu.Type</th>
                                            <th>Person</th>
                                            <th>Organisation</th>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Dna based Data storage blueprint. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="work-box">
                                                <span>Work</span>
                                            </td>
                                            <td className="center">No one</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Power to the people by John Lenon.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Hoverboard recipt. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="bills-box">
                                                <span>Bills</span>
                                            </td>
                                            <td className="center">Mom</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Finance report office.pdf</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="office-box">
                                                <span>Office</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                {/* <Col lg={6}>
                            <Table responsive className="folders-table-1">
                                <tr className="table-heading">
                                    <th>Docu.Type</th>
                                    <th>Person</th>
                                    <th>Organisation</th>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Jaideep</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Isaiah</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Firas</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Dada</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Imaad</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                            </Table>
                        </Col> */}
                            </Row>
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
                                {/* <div className="checkbutton checkred">

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
                                            <div className="fileoption col-lg-6 col-md-8 col-sm-12">
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
                        </div> */}
                            </div >

                        </div>
                    </div>
                </Tab>
                <Tab eventKey="home3" title="Personal Information">
                    <div className="folders">
                        <h2>Recently accessed folders</h2>
                        <div className="folders-table">
                            <Row>
                                <Col lg={12}>
                                    <Table responsive className="folders-table-1">
                                        <tr className="table-heading">
                                            <th>File</th>
                                            <th>Size</th>
                                            <th>Tag</th>
                                            <th>Accessed By</th>
                                            <th>Docu.Type</th>
                                            <th>Person</th>
                                            <th>Organisation</th>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Dna based Data storage blueprint. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="work-box">
                                                <span>Work</span>
                                            </td>
                                            <td className="center">No one</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Power to the people by John Lenon.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Hoverboard recipt. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="bills-box">
                                                <span>Bills</span>
                                            </td>
                                            <td className="center">Mom</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Finance report office.pdf</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="office-box">
                                                <span>Office</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                {/* <Col lg={6}>
                            <Table responsive className="folders-table-1">
                                <tr className="table-heading">
                                    <th>Docu.Type</th>
                                    <th>Person</th>
                                    <th>Organisation</th>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Jaideep</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Isaiah</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Firas</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Dada</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Imaad</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                            </Table>
                        </Col> */}
                            </Row>
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
                                {/* <div className="checkbutton checkred">

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
                                            <div className="fileoption col-lg-6 col-md-8 col-sm-12">
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
                        </div> */}
                            </div >

                        </div>
                    </div>
                </Tab>
                <Tab eventKey="home4" title="Personal Information">
                    <div className="folders">
                        <h2>Recently accessed folders</h2>
                        <div className="folders-table">
                            <Row>
                                <Col lg={12}>
                                    <Table responsive className="folders-table-1">
                                        <tr className="table-heading">
                                            <th>File</th>
                                            <th>Size</th>
                                            <th>Tag</th>
                                            <th>Accessed By</th>
                                            <th>Docu.Type</th>
                                            <th>Person</th>
                                            <th>Organisation</th>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Dna based Data storage blueprint. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="work-box">
                                                <span>Work</span>
                                            </td>
                                            <td className="center">No one</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Power to the people by John Lenon.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Hoverboard recipt. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="bills-box">
                                                <span>Bills</span>
                                            </td>
                                            <td className="center">Mom</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Finance report office.pdf</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="office-box">
                                                <span>Office</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                {/* <Col lg={6}>
                            <Table responsive className="folders-table-1">
                                <tr className="table-heading">
                                    <th>Docu.Type</th>
                                    <th>Person</th>
                                    <th>Organisation</th>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Jaideep</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Isaiah</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Firas</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Dada</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Imaad</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                            </Table>
                        </Col> */}
                            </Row>
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
                                {/* <div className="checkbutton checkred">

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
                                            <div className="fileoption col-lg-6 col-md-8 col-sm-12">
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
                        </div> */}
                            </div >

                        </div>
                    </div>
                </Tab>
                <Tab eventKey="home5" title="Personal Information">
                    <div className="folders">
                        <h2>Recently accessed folders</h2>
                        <div className="folders-table">
                            <Row>
                                <Col lg={12}>
                                    <Table responsive className="folders-table-1">
                                        <tr className="table-heading">
                                            <th>File</th>
                                            <th>Size</th>
                                            <th>Tag</th>
                                            <th>Accessed By</th>
                                            <th>Docu.Type</th>
                                            <th>Person</th>
                                            <th>Organisation</th>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Black Power By 2PAC.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Dna based Data storage blueprint. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="work-box">
                                                <span>Work</span>
                                            </td>
                                            <td className="center">No one</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Power to the people by John Lenon.MP4</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="music-box">
                                                <span>Music</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Hoverboard recipt. file</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="bills-box">
                                                <span>Bills</span>
                                            </td>
                                            <td className="center">Mom</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-file">
                                                <div className="file-inner">
                                                    <Image src='Images/homepage/fileicon.svg' />
                                                    <h2>Finance report office.pdf</h2>
                                                </div>
                                            </td>
                                            <td className="center">2MB</td>
                                            <td className="office-box">
                                                <span>Office</span>
                                            </td>
                                            <td className="center">Mail List</td>
                                            <td className="red-nda">
                                                <span>NDA</span>
                                            </td>
                                            <td className="blue-person">
                                                <span>Jaideep</span>
                                            </td>
                                            <td className="green-miyagi">
                                                <span>Miyagi</span>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                {/* <Col lg={6}>
                            <Table responsive className="folders-table-1">
                                <tr className="table-heading">
                                    <th>Docu.Type</th>
                                    <th>Person</th>
                                    <th>Organisation</th>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Jaideep</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Isaiah</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Firas</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Dada</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="red-nda">
                                        <span>NDA</span>
                                    </td>
                                    <td className="blue-person">
                                        <span>Imaad</span>
                                    </td>
                                    <td className="green-miyagi">
                                        <span>Miyagi</span>
                                    </td>
                                </tr>
                            </Table>
                        </Col> */}
                            </Row>
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
                                {/* <div className="checkbutton checkred">

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
                                            <div className="fileoption col-lg-6 col-md-8 col-sm-12">
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
                        </div> */}
                            </div >

                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default HomePage;
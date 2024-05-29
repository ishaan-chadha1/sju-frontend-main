
import { Col, Image, Row, Form, Table } from 'react-bootstrap';
import './TrashPage.css';
import { Link } from 'react-router-dom';
import TableDropdown from '../../component/TableDropdown/TableDropdown';
import { Icon } from '@iconify/react';



const TrashPage = () => {

    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
            <div className="upload-section bsync-section">
                <Row className='mt-5 mb-5'>
                    <Col lg={12}>
                        <ul className="upload trash">
                            <li>
                                <div>
                                    <h2>Upload data to Blockchain</h2>
                                </div>
                                <div className="box trash">
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
                                <div className="box trash">
                                    <div className="box-content">
                                        <Image src='Images/homepage/drag.svg' />
                                        <h5>Drag & Drop</h5>
                                        <input type="file" />
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </Col>

                </Row>



            </div>
            <Table responsive className="folders-table-1">
                <tr className="table-heading">
                    <th>Name</th>
                    <th>Tag</th>
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
                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown" >
                                <input type="checkbox" id='checkdropdown' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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

                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown1" >
                                <input type="checkbox" id='checkdropdown1' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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

                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown2" >
                                <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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


                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown3" >
                                <input type="checkbox" id='checkdropdown3' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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

                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown4" >
                                <input type="checkbox" id='checkdropdown4' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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
                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown5" >
                                <input type="checkbox" id='checkdropdown5' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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

                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown6" >
                                <input type="checkbox" id='checkdropdown6' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <ul className='tabledropdown'>
                                    <li><Link><Icon icon="solar:trash-bin-trash-linear" /></Link></li>
                                    <li><Link><Icon icon="mdi-light:share" /></Link></li>
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
                </div> */}
            </div >
        </div >
    );
}

export default TrashPage;


import { Col, Image, Row, Table } from 'react-bootstrap';
import './RecentlyAccessPage.css';
import { Link } from 'react-router-dom';

const RecentlyAccessPage = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
            <Row className='mt-5 mb-5'>
                <Col lg={6}>
                    <ul className="upload recentacce bsync">
                        <li>
                            <div>
                                <h2>Decentralise Data</h2>
                            </div>
                            <div className="box">
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
                            <div className="box">
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
                        <div className="folder-add">
                            <h2>Folders</h2>
                            <div className="add-button">
                                <h3>Add</h3>
                                <Image src="Images/homepage/add.svg"></Image>
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

            <Table responsive className="folders-table-1">
                <tr className="table-heading">
                    <th>Name</th>
                    <th>Tag</th>
                    <th>B-Sync Status</th>
                    <th>Shared With</th>
                    <th>Share Date</th>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Documentation Miyagi</h2>
                        </div>
                    </td>
                    <td >
                        <span className="btn-blue">Work</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">Mail List <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Magical-Retreat-2020.jpg</h2>
                        </div>
                    </td>
                    <td >
                        <span className="btn-red">Music</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">Theresa Webb <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Use-This-Meme.jpg</h2>
                        </div>
                    </td>
                    <td >
                        <span className="btn-yellow">Bills</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">Hash Code <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Documentation</h2>
                        </div>
                    </td>
                    <td >
                        <span className="btn-green">Office</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">None <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Table Documentation</h2>
                        </div>
                    </td>
                    <td>
                        <span className="btn-purple">Video</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">Hash Code <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Drigma-Video.mp4</h2>
                        </div>
                    </td>
                    <td>
                        <span className="btn-red">Music</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">None <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
                </tr>
                <tr>
                    <td className="table-file">
                        <div className="file-inner">
                            <Image src='Images/homepage/fileicon.svg' />
                            <h2>Figma-Tutorial.mp4</h2>
                        </div>
                    </td>
                    <td >
                        <span className="btn-purple">Video</span>
                    </td>
                    <td className="center"><Image src='Images/homepage/syncblue.svg' /></td>

                    <td className="center">Mail List <Image src='Images/homepage/download.svg' /></td>
                    <td>10/28/12</td>
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
        </div>
    );
}

export default RecentlyAccessPage;

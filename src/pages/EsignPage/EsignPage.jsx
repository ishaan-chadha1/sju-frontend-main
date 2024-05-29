
import { Image, Table } from 'react-bootstrap';
import './EsignPage.css';
import { Link } from 'react-router-dom';
import React from "react";
// import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import FileUpload from '../../component/FileUpload/FileUpload';
import TableDropdown from '../../component/TableDropdown/TableDropdown';
import { Tabs, Tab } from 'react-bootstrap'; // Example import statement for react-bootstrap


const EsignPage = () => {


    return (
        <div className='main-content mt-5'>
            <div className="managecontract">
                <div className="contractname">
                    <h4>Manage Contracts</h4>
                    <p>View, sign, manage, and download your contracts here.</p>
                </div>
                <Link to="/createcontract" className='esign btnblue'><Image src='Images/esign/upload.svg'></Image>Create New Contract</Link>
            </div>
            <div className="notice">
                <Image src='Images/esign/pendingicon.svg'></Image><p>Sent contract file will be immediately encrypted secure transmission. Eth sign will have no access to the contract’s and it will be stored on-chain after all signers have completed signatures.</p>
            </div>

            <FileUpload />
            <Table className="folders-table-1 mt-5" responsive>
                <tr className="table-heading">
                    <th></th>
                    <th>Contracy Name</th>
                    <th>Sent by</th>
                    <th>Signing Status</th>
                    <th>Status</th>
                    <th className='actionmain'>Action</th>
                </tr>
                <tr className='table-hover'>
                    <td><input type="checkbox" name='check' /></td>
                    <td className='center'>
                        <div className="docdetailmain">
                            <Image src='Images/homepage/document.svg' />
                            <div className="docmaindetail">
                                <h4>DNA_Storage_Research_Landscape....</h4>
                                <p>last Modified: January 04,2024</p>
                            </div>
                        </div>
                    </td>
                    <td className='center'>
                        <h4>Farraz</h4>
                        <p>0xA0Ae84...F18daDD7</p>
                    </td>
                    <td className='center'>
                        _ _ _ _ _ _ _0/1 Signed
                    </td>
                    <td className='center'>
                        <Link to="" className='linkoffer'>Pending Others</Link>
                    </td>
                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown" >
                                <input type="checkbox" id='checkdropdown' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <TableDropdown></TableDropdown>
                            </label>
                        </div>
                    </td>
                </tr>
                <tr className='table-hover'>
                    <td><input type="checkbox" name='check' /></td>
                    <td className='center'>
                        <div className="docdetailmain">
                            <Image src='Images/homepage/document.svg' />
                            <div className="docmaindetail">
                                <h4>DNA_Storage_Research_Landscape....</h4>
                                <p>last Modified: January 04,2024</p>
                            </div>
                        </div>
                    </td>
                    <td className='center'>
                        <h4>Farraz</h4>
                        <p>0xA0Ae84...F18daDD7</p>
                    </td>
                    <td className='center'>
                        _ _ _ _ _ _ _0/1 Signed
                    </td>
                    <td className='center'>
                        <Link to="" className='linkoffer'>Pending Others</Link>
                    </td>
                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown2" >
                                <input type="checkbox" id='checkdropdown2' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <TableDropdown></TableDropdown>
                            </label>
                        </div>
                    </td>
                </tr>
                <tr className='table-hover'>
                    <td><input type="checkbox" name='check' /></td>
                    <td className='center'>
                        <div className="docdetailmain">
                            <Image src='Images/homepage/document.svg' />
                            <div className="docmaindetail">
                                <h4>DNA_Storage_Research_Landscape....</h4>
                                <p>last Modified: January 04,2024</p>
                            </div>
                        </div>
                    </td>
                    <td className='center'>
                        <h4>Farraz</h4>
                        <p>0xA0Ae84...F18daDD7</p>
                    </td>
                    <td className='center'>
                        _ _ _ _ _ _ _0/1 Signed
                    </td>
                    <td className='center'>
                        <Link to="" className='linkoffer'>Pending Others</Link>
                    </td>
                    <td className='center'>
                        <div className="viewcontract">

                            <label for="checkdropdown3" >
                                <input type="checkbox" id='checkdropdown3' name='checkdropdown' />
                                <Image src='Images/homepage/threedot.svg' />
                                <TableDropdown></TableDropdown>
                            </label>
                        </div>
                    </td>
                </tr>
            </Table>


        </div>
    );
}

export default EsignPage;

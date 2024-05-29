
import { Col, Form, Image, Row } from 'react-bootstrap';
import './CertificatePage.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const CreateCertificateNextstep = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}

            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className="certificateimg bg-lightblue pb-0">
                        <Image src='Images/homepage/certificateimg.png'></Image>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="rejectdoc">
                        <div className="docowner">
                            <div className="docmain">
                                <span>M</span>
                                <div className="docname">
                                    <h5>mfaraz568@gmail.com</h5>
                                    <p>Migar</p>
                                </div>
                            </div>

                            <p className='rejectdoctext'>Reject document</p>
                        </div>

                        <div className="signdoc">
                            <Link className='btnblue'>Sign this document</Link>
                            <Link className='btnwhite'>Sign this document</Link>
                        </div>
                        <Tabs
                            defaultActiveKey="Recipients"
                            id="uncontrolled-tab-example"
                            className="mb-3 recipientbtns"
                        >
                            <Tab eventKey="Recipients" title={<span className='image'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.881 13.3711C19.4342 12.5228 20.5001 10.8944 20.5001 9C20.5001 6.23859 18.2615 4 15.5001 4C15.3595 4.00256 15.2192 4.01465 15.0802 4.03613L14.9445 4.05371L14.9408 4.05414C14.6664 4.08588 14.4697 4.33405 14.5014 4.60846C14.5332 4.88287 14.7814 5.07959 15.0558 5.04785L15.215 5.02734C15.3093 5.01184 15.4045 5.00275 15.5001 5C17.7093 5 19.5001 6.79083 19.5001 9C19.5001 11.2092 17.7093 13 15.5001 13C15.224 13 15.0001 13.2239 15.0001 13.5C15.0001 13.7761 15.224 14 15.5001 14C19.1799 14.0087 22.2263 16.8619 22.4757 20.5332C22.4935 20.7958 22.7116 20.9998 22.9747 21C22.9855 21 22.9962 21 23.0079 20.999C23.2835 20.9805 23.4919 20.7424 23.4738 20.4668C23.2441 17.0976 20.952 14.3356 17.881 13.3711ZM11.8795 13.3696C13.4321 12.521 14.4979 10.8936 14.5001 9C14.5001 6.23859 12.2615 4 9.50013 4C6.73872 4 4.50013 6.23859 4.50013 9C4.50013 10.8936 5.56519 12.5214 7.11726 13.3701C4.05842 14.3276 1.74934 17.0767 1.5265 20.4668C1.50831 20.7424 1.7168 20.9805 1.99232 20.999C1.99647 20.9993 2.00068 20.9996 2.00483 20.9999C2.27723 21.0145 2.50989 20.8056 2.52454 20.5332C2.7541 17.0328 5.5423 14.2445 9.04273 14.015C12.8953 13.7624 16.2232 16.6807 16.4757 20.5332C16.4935 20.7958 16.7116 20.9998 16.9747 21C16.9855 21 16.9962 21 17.0079 20.999C17.2835 20.9805 17.492 20.7424 17.4738 20.4668C17.2532 17.1099 14.9708 14.3337 11.8795 13.3696ZM9.50013 13C7.29096 13 5.50013 11.2092 5.50013 9C5.50013 6.79083 7.29096 5 9.50013 5C11.7084 5.0022 13.4979 6.79175 13.5001 9C13.5001 11.2092 11.7093 13 9.50013 13Z" fill="#002244" fill-opacity="0.6" />
                            </svg>
                                Recipients</span>}>
                                <Link to="/" className='explore mb-4 mt-4'>Show in Explorer <Image src='Images/homepage/explore.svg'></Image></Link>

                                <div className="stautstitle">
                                    <h5>Today</h5>
                                </div>
                                <div className="docmain statusdoc">
                                    <Image src='Images/homepage/bigeye.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was displayed</h5>
                                        <p>10 seconds ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>
                                <Image src='Images/homepage/dot.svg' className='m-0 ml-2' />
                                <div className="docmain statusdoc mt-5 mb-0">
                                    <Image src='Images/homepage/exploredoc.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was created</h5>
                                        <p>2 minutes ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>




                                <div className="signdoc">
                                    <Link className='btnblue'>See full history</Link>
                                    <Link className='btnwhite'>Export to DigiLocker</Link>
                                </div>
                            </Tab>
                            <Tab eventKey="Information" title={<span className='image'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 8.375C12.1548 8.375 11.875 8.65485 11.875 9C11.875 9.34515 12.1548 9.625 12.5 9.625C12.8452 9.625 13.125 9.34515 13.125 9C13.125 8.65485 12.8452 8.375 12.5 8.375ZM12.5 10.5C12.2239 10.5 12 10.7239 12 11V15.0005C12.0002 15.2766 12.224 15.5002 12.5 15.5C12.7759 15.4998 13.0002 15.276 13 15V11C13 10.7239 12.7761 10.5 12.5 10.5ZM12.5 2C6.97717 2 2.5 6.47717 2.5 12C2.5 17.5228 6.97717 22 12.5 22C18.0201 21.9935 22.4935 17.5201 22.5 12C22.5 6.47717 18.0228 2 12.5 2ZM12.5 21C7.52942 21 3.5 16.9706 3.5 12C3.5 7.02942 7.52942 3 12.5 3C17.4683 3.00543 21.4946 7.03168 21.5 12C21.5 16.9706 17.4706 21 12.5 21Z" fill="#002244" fill-opacity="0.6" />
                            </svg>
                                Information</span>}>
                                <Link to="/" className='explore mb-4 mt-4'>Show in Explorer <Image src='Images/homepage/explore.svg'></Image></Link>

                                <div className="stautstitle">
                                    <h5>Today</h5>
                                </div>
                                <div className="docmain statusdoc">
                                    <Image src='Images/homepage/bigeye.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was displayed</h5>
                                        <p>10 seconds ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>
                                <Image src='Images/homepage/dot.svg' className='m-0 ml-2' />
                                <div className="docmain statusdoc mt-5 mb-0">
                                    <Image src='Images/homepage/exploredoc.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was created</h5>
                                        <p>2 minutes ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>




                                <div className="signdoc">
                                    <Link className='btnblue'>See full history</Link>
                                    <Link className='btnwhite'>Export to DigiLocker</Link>
                                </div>
                            </Tab>
                            <Tab eventKey="History" title={<span className='image'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.853 9.247C21.334 10.4082 21.5514 11.6615 21.4898 12.9169C21.4281 14.1722 21.0888 15.3982 20.4963 16.5066C19.9039 17.615 19.073 18.5783 18.0635 19.327C17.054 20.0757 15.891 20.5912 14.6584 20.8364C13.4257 21.0816 12.154 21.0504 10.9348 20.745C9.71563 20.4397 8.57935 19.8678 7.60779 19.0704C6.63623 18.2731 5.85357 17.2703 5.31618 16.1342C4.77879 14.998 4.50004 13.7568 4.5 12.5C4.5 12.3674 4.55268 12.2402 4.64645 12.1464C4.74021 12.0527 4.86739 12 5 12C5.13261 12 5.25979 12.0527 5.35355 12.1464C5.44732 12.2402 5.5 12.3674 5.5 12.5C5.49663 14.2243 6.08707 15.8973 7.17204 17.2375C8.25702 18.5777 9.77036 19.5035 11.4576 19.8592C13.1449 20.215 14.9032 19.9789 16.4369 19.1907C17.9705 18.4025 19.1861 17.1103 19.8791 15.5314C20.5721 13.9524 20.7004 12.183 20.2423 10.5206C19.7841 8.85819 18.7676 7.40422 17.3636 6.40314C15.9596 5.40206 14.2538 4.91491 12.5328 5.02361C10.8119 5.13231 9.18089 5.83022 7.914 7H10C10.1326 7 10.2598 7.05268 10.3536 7.14645C10.4473 7.24021 10.5 7.36739 10.5 7.5C10.5 7.63261 10.4473 7.75979 10.3536 7.85355C10.2598 7.94732 10.1326 8 10 8H7C6.86739 8 6.74021 7.94732 6.64645 7.85355C6.55268 7.75979 6.5 7.63261 6.5 7.5V4.5C6.5 4.36739 6.55268 4.24021 6.64645 4.14645C6.74021 4.05268 6.86739 4 7 4C7.13261 4 7.25979 4.05268 7.35355 4.14645C7.44732 4.24021 7.5 4.36739 7.5 4.5V6.027C8.52048 5.16029 9.73127 4.54689 11.0337 4.23679C12.3362 3.92669 13.6935 3.92865 14.9951 4.24252C16.2966 4.55638 17.5056 5.17327 18.5236 6.04293C19.5416 6.91259 20.3397 8.01043 20.853 9.247ZM13 7C12.8674 7 12.7402 7.05268 12.6464 7.14645C12.5527 7.24021 12.5 7.36739 12.5 7.5V12.5C12.4999 12.5657 12.5127 12.6308 12.5378 12.6915C12.5628 12.7523 12.5996 12.8075 12.646 12.854L15.646 15.854C15.7399 15.9479 15.8672 16.0006 16 16.0006C16.1328 16.0006 16.2601 15.9479 16.354 15.854C16.4479 15.7601 16.5006 15.6328 16.5006 15.5C16.5006 15.3672 16.4479 15.2399 16.354 15.146L13.5 12.293V7.5C13.5 7.36739 13.4473 7.24021 13.3536 7.14645C13.2598 7.05268 13.1326 7 13 7Z" fill="#002244" fill-opacity="0.6" />
                            </svg>
                                History</span>}>
                                <Link to="/" className='explore mb-4 mt-4'>Show in Explorer <Image src='Images/homepage/explore.svg'></Image></Link>

                                <div className="stautstitle">
                                    <h5>Today</h5>
                                </div>
                                <div className="docmain statusdoc">
                                    <Image src='Images/homepage/bigeye.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was displayed</h5>
                                        <p>10 seconds ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>
                                <Image src='Images/homepage/dot.svg' className='m-0 ml-2' />
                                <div className="docmain statusdoc mt-5 mb-0">
                                    <Image src='Images/homepage/exploredoc.svg' className='m-0' />
                                    <div className="docname">
                                        <h5>The document was created</h5>
                                        <p>2 minutes ago by mfaraz568@gmail.com</p>
                                    </div>
                                </div>




                                <div className="signdoc">
                                    <Link className='btnblue'>See full history</Link>
                                    <Link className='btnwhite'>Export to DigiLocker</Link>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                </Col>

            </Row>

        </div>
    );
}

export default CreateCertificateNextstep;

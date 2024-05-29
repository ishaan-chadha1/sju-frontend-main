
import { Col, Form, Image, Row } from 'react-bootstrap';
import './CertificatePage.css';
import { Link } from 'react-router-dom';

const CertificateSign = () => {
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
                        <ul className='recipientbtns'>
                            <li>
                                <Link to=""><Image src='Images/homepage/recipient.svg'></Image>Recipients</Link>
                            </li>
                            <li>
                                <Link to=""><Image src='Images/homepage/information.svg'></Image>Information</Link>
                            </li>
                            <li>
                                <Link to=""><Image src='Images/homepage/history.svg'></Image>History</Link>
                            </li>
                        </ul>
                        <Link to="/" className='explore mb-4 mt-4'>Show in Explorer <Image src='Images/homepage/explore.svg'></Image></Link>




                        <div className='certificate-section'>
                            <div className='certificate-heading'>
                                <h3>Certificate</h3>
                                <p>Manage certificate lifecycle</p>
                            </div>
                            <div className='setting'>
                                <Image src='Images/settingicon.svg'></Image>
                            </div>
                        </div>
                        <div className='certificate-edit'>
                            <div className='edit'>
                                <div className='edit-img'>
                                    <Image src='Images/editicon.svg'></Image>
                                </div>
                                <h4>Certificate in edit</h4>
                            </div>
                            <Row className='align-items-center'>
                                <Col lg={6}>
                                    <div className='certificate-box'>
                                        <h5>Created by</h5>
                                        <p>Jan 21, 2024 at 1:57 PM</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='certificate-box'>
                                        <h5>Created by</h5>
                                        <p>Jan 21, 2024 at 1:57 PM</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='certificate-box'>
                                        <h5>Created by</h5>
                                        <p>Jan 21, 2024 at 1:57 PM</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='certificate-box'>
                                        <h5>Created by</h5>
                                        <p>Jan 21, 2024 at 1:57 PM</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='certificate-ending'>
                            <h3>Document card</h3>
                            <p>Download document card</p>
                        </div>











                    </div>
                </Col>

            </Row>

        </div>
    );
}

export default CertificateSign;

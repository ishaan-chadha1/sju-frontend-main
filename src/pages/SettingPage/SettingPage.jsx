
import { Col, Form, Image, Row } from 'react-bootstrap';
import './SettingPage.css';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const SettingPage = () => {
    return (
        <div className='main-content mt-5'>
            <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="home" title="Personal Information">

                    <Row className='mt-5'>
                        <Col lg={6}>
                            <div className="profileimage">
                                <Image src='Images/homepage/profileimage.png' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='profile-info'>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Full Name</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Username</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Email</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Phone Number</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Country</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="formname">
                                                <label for="fname">Industry</label>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="formname">
                                                <label for="fname">Organistion affiliation</label><br></br>
                                                <input type="text" id="fname"></input>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>

                            </div>
                        </Col>
                    </Row>





                </Tab>




                <Tab eventKey="profile" title="Login & Security">
                    <div className='profile-info mt-5'>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="formname">
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                            </Row>
                        </Form>

                    </div>
                </Tab>
                <Tab eventKey="longer-tab" title="Billing Information">
                    <div className='profile-info mt-5'>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Full Name</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Billing Address</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Payment Method</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Credit Card/Debit Card Used</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Billing Contact Information</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="formname">
                                        <label for="fname">Country</label>
                                        <input type="text" id="fname"></input>
                                    </div>
                                </Col>

                            </Row>
                        </Form>

                    </div>
                </Tab>
                <Tab eventKey="contact" title="Interface" >
                    <div className='profile-info mt-5'>
                        <div className='color-text'>
                            <h2>Change the color theme as per your prefrence,</h2>
                        </div>
                        <ul className='color-button'>
                            <li><Link className='linkblue'>Iris Blue</Link></li>
                            <li><Link className='linkred'>Viva Magenta</Link></li>
                            <li><Link className='linkgreen'>Emerald Green</Link></li>
                            <li><Link className='linkorange'>International  Orange</Link></li>
                            <li><Link className='linklightblue'>Miyagi Blue</Link></li>
                            <li><Link className='linkpurpke'>Iris Purple</Link></li>
                        </ul>
                        <Link className='btnmore'>More Options Coming Soon</Link>
                    </div>
                    <p className='text-blue'>Random Fact: Each colour has a story attached to it, hover over them to know more.</p>
                </Tab>
                <Tab eventKey="block" title="Block-Analytics" >
                    Tab content for Contact
                </Tab>
            </Tabs>

        </div>
    );
}

export default SettingPage;

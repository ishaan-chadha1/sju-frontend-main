
import { Col, Form, Image, Row } from 'react-bootstrap';
import './CertificatePage.css';
import { Link } from 'react-router-dom';

const CreateCertificate = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}

            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className="certificateimg bg-lightblue">
                        <Image src='Images/esign/certificateimg.png'></Image>
                    </div>
                </Col>
                <Col lg={6}>
                    <Form>
                        <div className="formdetail">
                            <Form.Label htmlFor="inputPassword5">Document Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter a document name'
                            />
                        </div>
                        <div className="formdetail">
                            <Form.Label htmlFor="inputPassword5">Name and Surname*</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Person Name'
                            />
                        </div>
                        <div className="formdetail">
                            <Form.Label htmlFor="inputPassword5">Course Name*</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter course name'
                            />
                        </div>
                        <div className="formdetail">
                            <Form.Label htmlFor="inputPassword5">Corse Details*</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Corse Details'
                            />
                        </div>
                        <div className="formdetail">
                            <Form.Label htmlFor="inputPassword5">Certification date*</Form.Label>
                            <Form.Control
                                type="date"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"

                            />
                        </div>
                        <div className="btncreate">
                            <Link to="/createcertificatenextstep" className='btn-blue'>Create New Certificate</Link>
                        </div>
                    </Form>
                </Col>

            </Row>

        </div>
    );
}

export default CreateCertificate;

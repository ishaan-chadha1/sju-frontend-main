
import { Col, Image, Row } from 'react-bootstrap';
import './CertificatePage.css';
import { Link } from 'react-router-dom';

const ChooseCertificate = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
            <h5 className='text-certificate'>Choose Certificate Template</h5>
            <Row>
                <Col lg={4}>
                    <div className="certificateimg">
                        {/* <Image src='Images/esign/certificateimg.png'></Image> */}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="certificateimg">
                        {/* <Image src='Images/esign/certificateimg.png'></Image> */}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="certificateimg">
                        {/* <Image src='Images/esign/certificateimg.png'></Image> */}
                    </div>
                </Col>
            </Row>
            <div className="btncreatcertificate mt-5">
                <Link to="/createcertificate" className='btnblue '>Create New Certificate</Link>
            </div>
        </div>
    );
}

export default ChooseCertificate;

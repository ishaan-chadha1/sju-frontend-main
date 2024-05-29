
import { Col, Image, Row } from 'react-bootstrap';
import './CertificatePage.css';
import { Link } from 'react-router-dom';

const CertificatePage = () => {
    return (
        <div className='main-content mt-5'>
            {/* <div className="sub-banner">
                <Image src="/Images/homepage/homeheroimg.jpg" />

            </div> */}
            <div className="addfolder">
                <Image src="Images/esign/folder.png" alt="" />
                <h3>No Document</h3>
                <p>You do not have any files in this workspace</p>
                <Link to="/choosecertificate">Add New Document</Link>
            </div>
        </div>
    );
}

export default CertificatePage;

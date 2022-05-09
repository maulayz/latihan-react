import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <div className="Footer" id="Contact">
            <Container>
                <Row className="text-center p-2 m-1 text-white">
                    <Col md={4}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                            <li>9999999++++++++</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center bottom-Footer">
                <p>&copy;{new Date().getFullYear()} City Guide App All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
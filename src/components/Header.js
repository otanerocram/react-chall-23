import React from 'react'
import RimacLogo from "../components/RimacLogo";
import { FaPhoneAlt } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap'

function Header() {
    return (
        <Row className="header-style">
            <Col xs={6} md={5} lg={5} className="d-md-block">
                <RimacLogo mobile={true} />
            </Col>
            <Col xs={6} md={5} lg={5} className="d-block d-md-none">
                <p className="callUs"> <FaPhoneAlt />&nbsp;Llámanos</p>    
            </Col>
            <Col md={7} lg={7} className="d-none d-md-block">
                <div className="dudas">¿Tienes alguna duda? &nbsp;<span> <FaPhoneAlt />&nbsp;(01) 411 6001</span></div>
            </Col>                
        </Row>
    )
}

export default Header

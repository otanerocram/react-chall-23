import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Redirect } from "react-router-dom"
import RimacLogo from "../components/RimacLogo";
import { FaPhoneAlt } from 'react-icons/fa';

import Juan from "../assets/juan.svg";

function PlanForm({authorized}) {

    if(!authorized){
        return <Redirect to="/" />
    }

    const placa = localStorage.getItem("placa")
    const nombre = localStorage.getItem("nombre")

    console.log(placa)
    console.log(nombre)
        
    return (
        <Container fluid>
            <Row>
                <Col md={5} lg={5} className="d-none d-md-block">
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs="auto"><RimacLogo /></Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h1>Hola {nombre}</h1>
                        </Col>
                    </Row>
                    
                    </Col>
                <Col md={5} lg={5} className="d-block d-md-none">
                    <Row>
                        <Col xs={6}> 
                            <RimacLogo />
                        </Col>
                        <Col xs={6}>
                            <p className="callUs"> <FaPhoneAlt />&nbsp;Llámanos</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-align-center">
                        Breadcumbs
                        </Col>
                        <Col xs={12}>
                            <h1>Mira las Coberturas</h1>
                            <h4>Conoce las coberturas para tu plan</h4>

                            <h4>Placa: {placa}</h4>
                            <div className="d-block">
                                <img src={Juan} alt="" />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col xs={12} sm={12} md={7} lg={7}>
                <p className="dudas">¿Tienes alguna duda? &nbsp;<span> <FaPhoneAlt />&nbsp;(01) 411 6001</span></p>
                </Col>
            </Row>
                
        </Container>
    )
}

export default PlanForm

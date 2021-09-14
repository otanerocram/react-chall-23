import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Redirect } from "react-router-dom"

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
                <Col md={5} lg={5} className="d-none d-md-block">Desktop</Col>
                <Col md={5} lg={5} className="d-block d-md-none">Mobile</Col>
                <Col xs={12} sm={12} md={7} lg={7}>{placa}, {nombre}</Col>
            </Row>
                
        </Container>
    )
}

export default PlanForm

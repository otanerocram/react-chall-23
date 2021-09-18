import React from "react";

import { Redirect } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

import { Container, Row, Col } from "react-bootstrap";

import Juan from "../assets/juan.svg";
import Header from "../components/Header";
import Covering from "../components/Covering";
import CalculatorBox from "./CalculatorBox";

function PlanForm({ authorized }) {
  const placa = localStorage.getItem("placa");
  const nombre = localStorage.getItem("nombre");

  if (placa === "" || placa == null || !authorized) {
    return <Redirect to="/" />;
  }

  console.log(placa);
  console.log(nombre);

  const bcDiv = {
    display: "flex",
    placeItems: "center",
    lineHeight: "48px",
    height: 48,
  };
  const backIcon = {
    fontSize: 24,
    color: "#F0F2FA",
    display: "flex",
    paddingRight: 12,
    paddingLeft: 32,
  };

  const breadCumbText = {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "16px",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: "#676F8F",
    marginRight: 16,
  };

  const heroH1 = {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 28,
    lineHeight: "36px",
    letterSpacing: -0.6,
    color: "#494F66",
    paddingTop: 8,
  };

  const heroH4 = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "28px",
    color: "#676F8F",
    paddingBottom: 24,
  };

  return (
    <Container fluid>
      <Header />
      <Row>
        <Col className="d-none d-md-block">
          <Row>
            <Col xs={12}>
              <h1>Hola {nombre}</h1>
            </Col>
          </Row>
        </Col>
        <Col className="d-block d-md-none">
          <Row>
            <Col
              xs={12}
              className="text-align-center bc-rimac"
              style={{ padding: 0 }}
            >
              <div style={bcDiv}>
                <span style={backIcon}>
                  <IoIosArrowDropleft />
                </span>
                <span style={breadCumbText}> Paso 2 de 2 </span>
                <span className="bc-bar" />
              </div>
            </Col>
            <Col xs={12} style={{ padding: 0 }}>
              <div className="heroPlan" style={{ backgroundColor: "#F7F8FC" }}>
                <h1 style={heroH1}>Mira las Coberturas</h1>
                <h4 style={heroH4}>Conoce las coberturas para tu plan</h4>

                <div className="hero-white-box">
                  <div className="col-6">
                    <h4 className="hero-license-plate">Placa: {placa}</h4>
                    <span className="hero-description">
                      Wolkswagen 2019 Golf
                    </span>
                  </div>
                  <div
                    className="col-6"
                    style={{ position: "inherit", textAlign: "right" }}
                  >
                    <img
                      src={Juan}
                      alt="img"
                      style={{ marginTop: -51, marginLeft: 90 }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <CalculatorBox />
          <Covering />
          
        </Col>
      </Row>
    </Container>
  );
}

export default PlanForm;

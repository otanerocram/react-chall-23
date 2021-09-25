import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./Header";

import UserThanks from "../assets/user-thanks.svg";
import UserThanksMobile from "../assets/user-thanks-mobile.svg";

import UserMan from "../assets/user-man.svg";

function Gracias() {
  return (
    <Container fluid>
      <Header />
      <Row>
        {/* Desktop Render */}
        <Col className="d-none d-md-block">
          <Row>
            <Col
              md={4}
              className="left-pane flex-center thanks"
              style={{
                height: "100vh",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <img src={UserMan} alt="" style={{ marginRight: -100 }} />
            </Col>
            <Col
              md={8}
              className="flex-center"
              style={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ConfirmMessage />
            </Col>
          </Row>
        </Col>

        {/* Mobile Render */}
        <Col className="d-block d-md-none">
          <Row>
            <Col xs={12} style={{ padding: 0 }}>
              <img src={UserThanksMobile} alt="" style={{ width: "100%" }} />
            </Col>
            <Col xs={12} className="flex-center">
              <ConfirmMessage option="isMobile" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const ConfirmMessage = (props) => {
  let styles = {
    maxW: 480,
    fontS: 36,
    letterSpacing: -0.2,
    lineHeight: "48px",
    paddingTop: "",
    buttonW: ""
  };

  if (props.option === "isMobile") {
    styles.maxW = "calc(100% - 32px)";
    styles.fontS = 28;
    styles.letterSpacing = -0.6;
    styles.lineHeight = "36px";
    styles.paddingTop = 45;
    styles.buttonW = "calc(100%)"
  }

  return (
    <div style={{ maxWidth: styles.maxW, paddingTop: styles.paddingTop }}>
      <div
        className="welcome"
        style={{
          fontSize: styles.fontS,
          letterSpacing: styles.letterSpacing,
          lineHeight: styles.lineHeight,
        }}
      >
        <span style={{ color: "#EF3340" }}>¡Te damos la bienvenida!</span>
        <span>Cuenta con nosotros para proteger tu vehículo</span>
      </div>
      <p className="confirm">
        Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu
        correo: <span>joel.sanchez@gmail.com</span>
      </p>

      <Button variant="danger" className="confirmButton" style={{width: styles.buttonW}}>
        Como usar mi Seguro
      </Button>
    </div>
  );
};

export default Gracias;

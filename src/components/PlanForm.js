import { useState } from "react";
import { Redirect } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import PersonOne from "../assets/person-one.svg";
import PersonTwo from "../assets/person-two.svg";
import Header from "../components/Header";
import Covering from "../components/Covering";
import CtaForm from "./CtaForm";
import StoreProvider from "../store/StoreProvider";

function PlanForm({ authorized }) {
  
  const placa = localStorage.getItem("placa");
  const nombre = localStorage.getItem("nombre");

  if (placa === "" || placa == null || !authorized) {
    return <Redirect to="/" />;
  }

  const datos = {
    nombre: nombre,
    placa: placa,
    monto: 0,
  };

  console.log(placa);
  console.log(nombre);

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
  
  
  

  return (
    <StoreProvider>
      <Container fluid>
        <Header />
        <Row>
          {/* Desktop Render */}
          <Col className="d-none d-md-block">
            <Row>
              <Col md={3} className="left-pane flex-center">
                menu izquierda
              </Col>
              <Col md={6} className="mid-pane flex-center flex-dir-col">
                <Container style={{ maxWidth: 460 }}>
                  <BreadCumb />
                  <PlanFormDesktop params={datos} />
                  <CalculatorBox />
                  <AddCovering />
                  <Covering />
                </Container>
              </Col>
              <Col md={3} className="right-pane flex-center flex-dir-row">
                <CtaForm option="desktop" />
              </Col>
            </Row>
          </Col>

          {/* Mobile Render */}
          <Col className="d-block d-md-none">
            <Row>
              <Col xs={12} style={{ padding: 0 }}>
                <div className="mobile-container">
                  <BreadCumb option="mobile" />
                  <div
                    className="heroPlan"
                    style={{ backgroundColor: "#F7F8FC" }}
                  >
                    <h1 style={heroH1}>Mira las Coberturas</h1>
                    <KnowCovering />
                    <HeroBox options={{ isMobile: true, plateNumber: placa }} />
                  </div>
                </div>
              </Col>
            </Row>

            <CalculatorBox option="mobile" />
            <AddCovering option="mobile" />
            <Covering />
            <CtaForm />
          </Col>
        </Row>
      </Container>
    </StoreProvider>
  );
}

const KnowCovering = () => (
  <h4 className="heroH4">Conoce las coberturas para tu plan</h4>
);

const HeroBox = (props) => {
  const { isMobile, plateNumber } = props.options;

  if (isMobile) {
    return (
      <>
        <div className="hero-white-box">
          <div className="col-6">
            <h4 className="hero-license-plate">Placa: {plateNumber}</h4>
            <span className="hero-description">Wolkswagen 2019 Golf</span>
          </div>
          <div
            className="col-6"
            style={{ position: "inherit", textAlign: "right" }}
          >
            <img
              src={PersonOne}
              alt="img"
              style={{ marginTop: -51, marginLeft: 90 }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="hero-white-box-desktop">
          <div className="col-6">
            <h4 className="hero-license-plate">Placa: {plateNumber}</h4>
            <span className="hero-description">Wolkswagen 2019 Golf</span>
          </div>
          <div>
            <div
              className="col-6"
              style={{ position: "inherit", textAlign: "right" }}
            >
              <img
                src={PersonTwo}
                alt="img"
                style={{ marginTop: -51, marginLeft: 90 }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

const BreadCumb = (props) => {
  let myStyle = [];
  let msg = "";
  let extra = "";

  if (props.option === "mobile") {
    myStyle.push({ borderBottom: "1px solid #e4e8f7" });
    myStyle.push({ color: "#f0f2fa", paddingLeft: 32 });
    msg = "Paso 2 de 2 ";
    extra = <span className="bc-bar" />;
  } else {
    myStyle.push({ paddingTop: 48 });
    myStyle.push({ color: "#EF3340" });
    msg = "volver";
  }

  return (
    <div className="bc-rimac" style={myStyle[0]}>
      <span className="backIcon" style={myStyle[1]}>
        <IoIosArrowDropleft />
      </span>
      <span
        className="breadCumbText"
        style={{ fontSize: 12, letterSpacing: 0.6 }}
      >
        {msg}
      </span>
      {extra}
    </div>
  );
};

const AddCovering = (props) => {
  let myStyle = [];

  if (props.option === "mobile") {
    myStyle.push({
      paddingTop: 30,
      paddingLeft: 32,
      paddingRight: 32,
      paddingBottom: 40,
    });
  } else {
    myStyle.push({
      paddingTop: 55,
      paddingBottom: 30,
      borderTop: "1px solid #E4E8F7",
    });
  }

  return (
    <>
      <Col xs={12} className="form-service-text" style={myStyle[0]}>
        Agrega o quita coberturas
      </Col>{" "}
    </>
  );
};

const PlanFormDesktop = (props) => {
  const { nombre, placa } = props.params;

  return (
    <div className="desktop-main">
      <div className="salute">
        ¡Hola, <span>{nombre}!</span>
      </div>
      <KnowCovering />
      <HeroBox options={{ isMobile: false, placa: placa }} />
    </div>
  );
};



const CalculatorBox = (props) => {
  const ammountChange = (event) => {
    event.preventDefault();
  };

  let nameClasses = [];
  let colW = 12;

  const min = 12500;
  const max = 16500;

  if (props.option === "mobile") {
    nameClasses.push("form-calulator-box fcb-m");
  } else {
    nameClasses.push("form-calulator-box fcb-d");
    colW = 6;
  }

  const [monto, setmonto] = useState(12500);

  const suma = () => {
    if (monto > max - 100) {
      setmonto(max);
    } else {
      setmonto(monto + 100);
    }
  };

  const resta = () => {
    if (monto < min + 100) {
      setmonto(min);
    } else {
      setmonto(monto - 100);
    }
  };

  return (
    <Row>
      <div className={nameClasses[0]}>
        <Row>
          <Col xs={colW} className="form-calculator-text">
            Indica la suma asegurada
            <div className="form-calculator-text-minmax">
              MIN $12,500 | MAX $16,500
            </div>
          </Col>
          <Col xs={colW} className="mb-3">
            <InputGroup className="mb-3 form-calculator-minmax">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={resta}
              >
                -
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={monto}
                onChange={ammountChange}
                readOnly
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={suma}
              >
                +
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default PlanForm;

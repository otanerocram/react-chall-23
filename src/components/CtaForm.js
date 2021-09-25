import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CtaForm(props) {
  const [store, dispatch] = useContext(StoreContext);
  const { amount } = store;

  let history = useHistory();
  
  if (props.option === "desktop") {
    return (
      <div className="cta-box">
        <div className="cta-form-mobile">
          <div className="amount-title">Monto</div>
          <div className="amount-price">$ {amount}</div>
          <div className="amount-period">mensuales</div>
        </div>
        <div className="cta-addons">
          <p>El precio incluye:</p>
          <ul className="cta-check">
            <li>Llanta de Repuesto</li>
            <li>Análisis de motor</li>
            <li>Aros grati</li>
          </ul>
        </div>
        <div>
          <Button variant="danger" className="cta-button-alt">
            Lo quiero
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <Row className="cta-form">
        <Col xs={5}>
          <div className="amount-price">$ {amount}</div>
          <div className="amount-period">mensual</div>
        </Col>
        <Col xs={7}>
          <Button
            variant="danger"
            className="cta-button"
            onClick={() => {
              history.push("/gracias");
            }}
          >
            Lo quiero
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CtaForm;

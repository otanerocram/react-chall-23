import React from "react";

import { Row, Col, InputGroup, Button, FormControl } from "react-bootstrap";

export default function CalculatorBox() {
  const ammountChange = (event) => {
    event.preventDefault();
  };
  return (
    <Row>
      <div className="form-calulator-box">
        <Col xs={12} className="form-calculator-text">
          Indica la suma asegurada
        </Col>
        <Col xs={12} className="form-calculator-text-minmax">
          MIN $12,500 | MAX $16,500
        </Col>
        <Col xs={12} className="mb-3">
          <InputGroup className="mb-3 form-calculator-minmax">
            <Button variant="outline-secondary" id="button-addon1">
              -
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value="$ 14,300"
              onChange={ammountChange}
              readOnly
            />
            <Button variant="outline-secondary" id="button-addon1">
              +
            </Button>
          </InputGroup>
        </Col>
      </div>
    </Row>
  );
}

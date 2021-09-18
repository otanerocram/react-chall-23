import React from "react";
import { Row, Col, Tabs, Tab, Accordion } from "react-bootstrap";

import StolenTire from "../assets/stolen-tire.svg";
import IconDamage from "../assets/icon-damage.svg";
import PerdidaTotal from "../assets/perdida-total.svg";

import "../styles/Covering.scss";

export default function Covering() {
  return (
    <>
      <Row>
        <div className="form-services-box">
          <Col xs={12} className="form-service-text">
            Agrega o quita coberturas
          </Col>
          <Col xs={12}>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="form-service-tab mb-3"
            >
              <Tab eventKey="home" title="Protege tu auto">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <div className="accordion-services">
                      <Row>
                        <Col xs={2}>
                          <img src={StolenTire} alt="" />
                        </Col>
                        <Col xs={7} className="accordion-newtittle">
                          Llanta Robada
                        </Col>
                        <Col xs={3}>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </Col>
                      </Row>
                    </div>

                    <Accordion.Body>
                      He salido de casa a las cuatro menos cinco para ir a la
                      academia de ingles de mi pueblo (Sant Cugat, al lado de
                      Barcelona) con mi bici, na llego a la academia que está en
                      el centro del pueblo en una plaza medio-grande y dejo
                      donde siempre la bici atada con una pitón a un sitio de
                      esos de poner las bicis
                    </Accordion.Body>
                    <Accordion.Header />
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <div className="accordion-services">
                      <Row>
                        <Col xs={2}>
                          <img src={IconDamage} alt="" />
                        </Col>
                        <Col xs={7} className="accordion-newtittle">
                          Choque y/o pasarte la luz roja
                        </Col>
                        <Col xs={3}>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    <Accordion.Header />
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <div className="accordion-services">
                      <Row>
                        <Col xs={2}>
                          <img src={PerdidaTotal} alt="" />
                        </Col>
                        <Col xs={7} className="accordion-newtittle">
                          Atropello en la via evitamiento
                        </Col>
                        <Col xs={3}>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                    <Accordion.Header />
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab eventKey="profile" title="Protege a los que te rodean">
                <p style={{ paddingLeft: 32, paddingRight: 32 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis quae nihil adipisci numquam architecto, nam
                  repellendus, voluptatum nobis earum exercitationem
                  consequuntur? Laboriosam ut tenetur quas officiis commodi
                  minus animi aliquam.
                </p>
              </Tab>
              <Tab eventKey="contact" title="Mejora tu plan" disabled>
                <p>Opciones para mejorar tu plan</p>
              </Tab>
            </Tabs>
          </Col>
        </div>
      </Row>
    </>
  );
}

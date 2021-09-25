import { FaPhoneAlt } from "react-icons/fa";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import HappyMobile from "../assets/happy-mobile.svg";
import HappyDesktop from "../assets/happy-desktop.svg";
import RimacLogo from "../components/RimacLogo";
import HeroText from "../components/HeroText";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  let history = useHistory();

  const loginData = {
    documento: "",
    celular: "",
    placa: "",
    name: "",
  };

  const handleChange = (event) => {
    event.preventDefault();
    // history.push("/plan")
    loginData[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(loginData);

    let idToFind = loginData.documento.charAt(0);
    consumeAPI("https://jsonplaceholder.typicode.com/users/", idToFind).then(
      (info) => {
        console.log(info.name);

        localStorage.setItem("placa", loginData.placa);
        localStorage.setItem("nombre", info.name);

        history.push("/plan");
      }
    );
  };

  const consumeAPI = async (url, userID) => {
    let fullUrl = url + userID;
    const data = await fetch(fullUrl);
    const userInfo = await data.json();
    return userInfo;
  };


  return (
    <Container fluid>
      <Row>
        <Col md={5} lg={5} className="d-none d-md-block img-container">
          <Row>
            <Col xs={1}></Col>
            <Col>
              <RimacLogo />
            </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs="auto">
              <img className="HappyDesktop" src={HappyDesktop} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col>
              <HeroText />
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p className="copyRigths">© 2021 RIMAC Seguros y Reaseguros.</p>
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={5} className="d-block d-md-none head-bg">
          <Row>
            <Col xs={6}>
              <RimacLogo />
            </Col>
            <Col xs={6}>
              <p className="callUs">
                {" "}
                <FaPhoneAlt />
                &nbsp;Llámanos
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={8}
              className="d-flex align-items-left flex-column align-self-center advise"
            >
              <HeroText />
            </Col>
            <Col xs={4} className="HappyMobile">
              <img src={HappyMobile} alt="" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <Row>
            <Col md={4}>&nbsp;</Col>
            <Col md={8} className="d-none d-md-block text-alig-right">
              <p className="dudas">
                ¿Tienes alguna duda? &nbsp;
                <span>
                  {" "}
                  <FaPhoneAlt />
                  &nbsp;(01) 411 6001
                </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="formDefault">
                <Form className="loginBox" onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="tipodoc"
                    onChange={handleChange}
                  >
                    <p className="loginWelcome">Déjanos tus datos</p>

                    <InputGroup className="mb-3">
                      <Form.Select
                        aria-label="Doc"
                        name="tipodoc"
                        className="m-w-100"
                      >
                        <option value="dni">DNI</option>
                        <option value="ce">C.E.</option>
                        <option value="pasaporte">Pasaporte</option>
                      </Form.Select>

                      <Form.Control
                        type="number"
                        placeholder="Nro. de Doc"
                        className="inputRimac"
                        onChange={handleChange}
                        name="documento"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Control
                      type="number"
                      placeholder="Celular"
                      className="inputRimac"
                      onChange={handleChange}
                      name="celular"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicLicensePlate"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Placa"
                      className="inputRimac"
                      onChange={handleChange}
                      name="placa"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" required />
                    <span className="login-check-label">
                      Acepto la política de Protecciòn de Datos Personales y los
                      Términos y Condiciones.
                    </span>
                  </Form.Group>

                  <Button variant="danger" type="submit" className="btnCotizar">
                    Cotizalo
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

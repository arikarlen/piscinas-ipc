import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";

const FormTrabaja = () => {
  /*Toast*/
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [position, setPosition] = useState("bottom-end");
  /*ToastEnd*/

  const [values, setValues] = useState({
    origin: "Trabaja con nosotros",

    nombre: "",
    telefono: "",
    email: "",
    provincia: "",
    localidad: "",
    cv: "",
    comentarios: "",
  });

  const {
    nombre,
    email,
    provincia,
    telefono,
    localidad,
    cv,
    origin,
    comentarios,
  } = values;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const [responseMessage, setResponseMessage] = useState({
    message: "",
    status: "",
  });

  const sendData = () => {
    setError("");
    setDisabled(true);
    axios.post(`https:urlDynamics`, values).then(
      (res) => {
        setDisabled(false);
        setError(
          "Gracias por su interes en ser parte de IPC. A la brevedad nos estaremos contactactando con usted"
        );
        setValues({
          origin: "Trabaja con nosotros",

          nombre: "",
          email: "",
          provincia: "",
          telefono: "",
          localidad: "",
          cv: "",
          position: "",
        });
      },
      (error) => {
        setError(
          "Hubo un error al enviar su CV. Por favor intentelo mas tarde"
        );
        setDisabled(false);
      }
    );
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //Activar Recaptcha

  const handleSubmit = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute("6LdKISYdAAAAAAZ_z3WlZ1LGYiaM_70zPcZqaYfa", {
          action: "submit",
        })
        .then(function (token) {
          // Send form value as well as token to the server
          sendData();
          setResponseMessage({
            message: "Sending...",
            status: "sending",
          });
        });
    });
  };

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const changeClass = (id) => {
    const ceve = document.getElementById(id);
    ceve.className = " fileOk";
  };

  const removeClass = (id) => {
    const ceve = document.getElementById(id);
    ceve.classList.remove("fileOk");
    ceve.classList.add("file");
  };

  const handleChangeStatus = async ({ meta, file }, status) => {
    console.log(status, meta);
    /*setValues({
      ...values,
      cv: file,
    });*/
    console.log(status);

    if (status === "done") {
      const base64 = await convertBase64(file);
      values["cv"] = base64;
      console.log("Se cargo!!!!");
      setShowA(!showA);
    }

    if (status === "headers_received") {
      changeClass("backFiles");
    } else if (status === "removed") {
      removeClass("backFiles");
    } else if (status === "removed") {
      console.log("Error al cargar el archivo");
    }
  };

  console.log(values);

  return (
    <Fragment>
      <h1 className="text-center">Trabajá con nosotros</h1>

      <Form onSubmit={handleSubmit} id="formJobs">
        <ToastContainer className="p-3" position={position}>
          <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Su CV se cargó con exito</strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>

        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group as={Col} className="input-getIn">
                <Form.Control
                  required
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre y Apellido"
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} className="input-getIn">
                <Form.Control
                  required
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono"
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} className="input-getIn">
                <Form.Control
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Container fluid id="backFiles" className="file">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group
                  as={Col}
                  className="contentDropzone"
                  controlId="files"
                  id="curr"
                >
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    inputContent="Adjunta tu Curriculum Vitae"
                    maxFiles={1}
                    accept=".pdf"
                    id="cv"
                    name="cv"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group as={Col} className="input-getIn">
                <Form.Select
                  aria-label="Default select example"
                  id="provincia"
                  name="provincia"
                  value={provincia}
                  onChange={handleInputChange}
                >
                  <option>Provincia</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Ciudad Autónoma de Buenos Aires">
                    Ciudad Autónoma de Buenos Aires
                  </option>
                  <option value="Catamarca">Catamarca</option>
                  <option value="Chaco">Chaco</option>
                  <option value="Catamarca">Catamarca</option>
                  <option value="Chubut">Chubut</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Corrientes">Corrientes</option>
                  <option value="Entre Ríos">Entre Ríos</option>
                  <option value="Formosa">Formosa</option>
                  <option value="Jujuy">Jujuy</option>
                  <option value="La Pampa">La Pampa</option>
                  <option value="La Rioja">La Rioja</option>
                  <option value="Mendoza">Mendoza</option>
                  <option value="Misiones">Misiones</option>
                  <option value="Neuquén">Neuquén</option>
                  <option value="Río Negro">Río Negro</option>
                  <option value="Salta">Salta</option>
                  <option value="San Juan">San Juan</option>
                  <option value="San Luis">San Luis</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                  <option value="Santa Fe">Santa Fe</option>
                  <option value="Santiago del Estero">
                    Santiago del Estero
                  </option>
                  <option value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">
                    Tierra del Fuego, Antártida e Islas del Atlántico Sur
                  </option>
                  <option value="Tucumán">Tucumán</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="input-getIn">
                <Form.Control
                  type="text"
                  id="localidad"
                  name="localidad"
                  value={localidad}
                  onChange={handleInputChange}
                  placeholder="Localidad"
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} className="input-getIn">
                <Form.Control
                  type="textArea"
                  id="comentarios"
                  name="comentarios"
                  value={comentarios}
                  onChange={handleInputChange}
                  placeholder="Comentarios"
                ></Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" value="submit">
                Enviar
              </Button>
              <div className="alert-message">
                <p>{error}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </Fragment>
  );
};

export default FormTrabaja;

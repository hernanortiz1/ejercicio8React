import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="p-3 border rounded-3 fondoFormulario">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese nombre"
            />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
             <Form.Control.Feedback type="invalid">
              Dato incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese apellido"
              
            />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>DNI *</Form.Label>
            <Form.Control type="text" placeholder="Ingrese DNI" required />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" required />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato invalido
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Enviar</Button>
      </Form>
    </section>
  );
};

export default Formulario;

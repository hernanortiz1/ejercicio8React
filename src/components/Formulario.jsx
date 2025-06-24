import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const [dato, setDato] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });
  const [datosCorrectos, setDatosCorrectos] = useState([]);
  const [validated, setValidated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarDatos = (datos) => {
    if (form.checkValidity() === false) {
      // e.preventDefault();
      e.stopPropagation();

      Swal.fire({
        icon: "error",
        title: "Datos incorrectos!",
        text: "Volvé a ingresar los datos",
      });
    } else {
      Swal.fire({
        title: "Datos guardados correctamente",
        text: `${dato.nombre}, ${dato.apellido}, ${dato.dni}, ${dato.email}`,
        icon: "success",
        draggable: true,
      });
    }

    setDatosCorrectos([...datosCorrectos, datos]);
    reset();
    setValidated(false);
  };

  return (
    <section className="p-3 border rounded-3 fondoFormulario">
      <Form  onSubmit={handleSubmit(agregarDatos)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese nombre"
              value={dato.nombre}
              name="nombre"
              onChange={(e) =>
                setDato({ ...dato, [e.target.name]: e.target.value })
              }
            />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese apellido"
              value={dato.apellido}
              name="apellido"
              onChange={(e) =>
                setDato({ ...dato, [e.target.name]: e.target.value })
              }
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
            <Form.Control
              type="text"
              placeholder="Ingrese DNI"
              required
              value={dato.dni}
              name="dni"
              onChange={(e) =>
                setDato({ ...dato, [e.target.name]: e.target.value })
              }
            />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese email"
              required
              value={dato.email}
              name="email"
              onChange={(e) =>
                setDato({ ...dato, [e.target.name]: e.target.value })
              }
            />
            <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Dato invalido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Text className="text-muted mt-3">
            (Campos obligatorios *)
          </Form.Text>
        </Row>

        <div className="d-grid gap-2">
          <Button type="submit" variant="primary" size="lg">
            Enviar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Formulario;

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const [datosCorrectos, setDatosCorrectos] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarDatos = (datos) => {
    Swal.fire({
      title: "Datos guardados correctamente",
      text: `${datos.nombre}, ${datos.apellido}, ${datos.dni}, ${datos.email}`,
      icon: "success",
      draggable: true,
    });

    setDatosCorrectos([...datosCorrectos, datos]);
    reset();
  };

  return (
    <section className="p-3 border rounded-3 fondoFormulario">
      <Form onSubmit={handleSubmit(agregarDatos)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese nombre"
              {...register("nombre", {
                required: "El nombre un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener 3 caracteres como minimo ",
                },
                maxLength: {
                  value: 50,
                  message: "El nombre debe tener 50 caracteres como máximo",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese apellido"
              {...register("apellido", {
                required: "El apellido un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El apellido debe tener 3 caracteres como minimo ",
                },
                maxLength: {
                  value: 50,
                  message: "El apellido debe tener 50 caracteres como máximo",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.apellido?.message}
            </Form.Text>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>DNI *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese DNI"
              required
              {...register("dni", {
                required: "El Dni un dato obligatorio",

                pattern: {
                  value: /^[0-9]{7,8}$/,
                  message: "Debe tener 7 u 8 dígitos",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.dni?.message}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese email"
              required
              {...register("email", {
                required: "El Email un dato obligatorio",

                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Email inválido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
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

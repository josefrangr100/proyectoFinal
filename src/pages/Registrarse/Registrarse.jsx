import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../styles/Register.css';

export const Registrarse = () => {
  return (
    <>
    <h1 className="p-4"> Registrarse </h1>
    <Form className="FormRegisto w-50 p-4"  >
      <Row>
      <Col xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
      </Col>
      <Col  xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese contraseña" />
      </Form.Group>
  
      <Button className="button-reg" variant="outline-dark" type="submit">
        Registrarme
      </Button>
    </Form>
    </>
  );
}



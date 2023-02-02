import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheck  } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const GridRegister = () => {
  return (
    <Container fluid > 
      <Row>
      <h1 className="titleRegister"> Registrate </h1>
        {/* <Col sm={8} className = "formRegistro"> */}
        
    {/* //FORMULARIO DE REGISTRO// */}
    <Form className="formRegisto w-50 p-4" action='/users' method='post' >
      <Row>
      <Col xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" name='name' />
      </Form.Group>
      </Col>
      <Col  xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" name='lastName' />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese contraseña" name='password' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirme su contraseña" name='confirmPassword'/>
      </Form.Group>
  
      <Button className="button-reg" variant="outline-dark" type="submit">
        Registrarme
      </Button>
    </Form>
    
        {/* </Col> */}
        <Col sm={6} className="itemsRegistro">
          
          <Row className='rowItems'>
          <FaCheck /> 
          
          <p>Recibi los menus diarios a tu mail</p>
          </Row>

          <Row className='rowItems'>
          <FaCheck />
            <p>Obtené descuentos especiales para suscriptores</p>
          </Row>

            <Row className='rowItems'>
          <FaCheck />
            <p>Envios gratis</p>
          </Row>

          <Row className='rowItems'>
          <FaCheck />
            <p>Envios prioritarios</p>
          </Row>
        
        </Col>
      </Row> 
      
    </Container>
  );
}


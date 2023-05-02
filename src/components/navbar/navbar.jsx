import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CompNambar = props => {
  const navbarTitle = 'React Simple Signup';

  return (
    <>


      <Navbar bg="white" variant="light">
        <Container >
          <Navbar.Brand href="#home">{navbarTitle}</Navbar.Brand>
          <Nav className="ml-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contanct</Nav.Link>
            {/* <Button variant="primary" onClick={props.setMode}>Switch Mode</Button>{' '} */}
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={props.setMode}
            />

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CompNambar;
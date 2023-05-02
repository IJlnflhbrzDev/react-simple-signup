import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CompNambar() {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">React Simple Signup</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contanct</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CompNambar;
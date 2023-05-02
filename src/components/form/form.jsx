import {useState} from 'react' ; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CompForm() {
  const [title, setTitle] = useState('Register Your Account Here') ;
  // const [conditional, setConditional] = useState(false) ;

  const clickMe = (  ) => {
    setTitle('Anda Berhasil Membuat account');
  }
  return (
    <Form>
        <h2>{title}</h2>
        <p>Start your 14 days free trial.</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Phone Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Repeat Password" />
      </Form.Group>

      <Button variant="primary"  className='w-100' onClick={() => clickMe()}>
        Submit
      </Button>
    </Form>
  );
}

export default CompForm;
import {React,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ilustration from '../../assets/ilustration.png';
import CompNambar from '../navbar/navbar'
import Footer from '../footer/footer'
import CompForm from '../form/form';
import classes from './UseCaseToggle.module.css'




 const Home = proprs => {
    const [mode, setMode] = useState(true);

    const toggledClass = mode ? classes.light : classes.dark;
    const clickHandler = () => {
          setMode(prevState => !prevState);
          console.log(mode);
          console.log(toggledClass);
      };
    return (
        <section className={toggledClass}>

            {/* <button  onClick={clickHandler}>Toggle display mode</button> */}

            <CompNambar setMode={clickHandler} />
            <Container className='mt-5 mb-5'>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col lg='5'>
                    <div className='form-box'>
                    <CompForm />
                    </div>
                    </Col>
                    <Col  lg="7">
                        <img src={ilustration} className='w-100' alt="" />
                    </Col>

                </Row>
            </Container>


            <Footer />
        </section>
    )
}

export default Home;
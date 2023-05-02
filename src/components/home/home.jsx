import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ilustration from '../../assets/ilustration.png';
import CompNambar from '../navbar/navbar'
import Footer from '../footer/footer'
import CompForm from '../form/form';



export default function Home() {
    return (
        <>
            <CompNambar />
            <Container className='mt-5 mb-5'>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                    <div className='form-box'>
                    <CompForm />
                    </div>
                    </Col>
                    <Col>
                        <img src={ilustration} className='w-100' alt="" />
                    </Col>

                </Row>
            </Container>


            <Footer />
        </>
    )
}

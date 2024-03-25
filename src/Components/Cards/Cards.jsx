import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardimg from '../../assets/Images/banner1.jpeg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <>
    <Container>
    <Row className='mt-3'>
      <Col md={3} className="mb-3"> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cardimg} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} className="mb-3"> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cardimg} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} className="mb-3"> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cardimg} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} className="mb-3"> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cardimg} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} className="mb-3"> 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Cardimg} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </>
  );
}

export default Cards;
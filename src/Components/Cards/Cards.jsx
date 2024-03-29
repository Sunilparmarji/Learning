import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardimg from '../../assets/Images/banner1.jpeg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
    // Define JSON data for cards
    const cardData = [
        {
            title: "Card 1",
            description: "Description for Card 1 using json data"
        },
        {
            title: "Card 2",
            description: "Description for Card 2 using json data"
        },
        {
            title: "Card 3",
            description: "Description for Card 3 using json data"
        },
        {
            title: "Card 4",
            description: "Description for Card 4 using json data"
        },
        {
            title: "Card 5",
            description: "Description for Card 5 using json data"
        },
    ];
    // State to manage clicked state for each card
    const [clickedCards, setClickedCards] = useState([]);
    // const [statechange, Setstatechange] = useState(false) ;
    const handleClick = (index) => {
       // Toggle clicked state for the clicked card
       const newClickedCards = [...clickedCards];
       newClickedCards[index] = !newClickedCards[index];
       setClickedCards(newClickedCards);
    }
  return (
    <>
    <Container>
      <Row className='mt-3'>
        {cardData.map((item, index) => (
          <Col md={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Cardimg} />
              <Card.Body>
              <Card.Title>Title : {item.title}</Card.Title>
                <Card.Text>Description : {item.description}</Card.Text>
                {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                <Button variant="primary" onClick={() => handleClick(index)}>Go somewhere</Button>
                  {clickedCards[index] && <p>Card {index + 1} is clicked</p>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </Container>
        </>

  );
}

export default Cards;
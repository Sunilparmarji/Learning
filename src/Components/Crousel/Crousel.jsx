import React from 'react';
import Banner from '../../assets/Images/download.jpg';
import Banner1 from '../../assets/Images/download2.jpg';
import Banner2 from '../../assets/Images/download3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import '../Crousel/Crousel.scss'

function Crousel() {
  return (
    <>         <Carousel className="custom-crousel">
            <Carousel.Item>
              <Carousel.Caption>
                <Image src={Banner} className="img-fluid"/>
                <div className="content">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <Image src={Banner1} className="img-fluid"/>
                <div className="content">
                  <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
              <Image src={Banner2} className="img-fluid"/>
              <div className="content"><h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p></div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </>
    
  );
}

export default Crousel;
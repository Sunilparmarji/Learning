import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Contact () {
    return (
        <>
            <div className="contactWrapper text-center my-3">
                <h3 className="">Contact Us</h3>
                <p>Fill up the form below to send us a message.</p>
            </div>
            <div className="formMapWrapper">
                <Container>
                    <Row>
                        <Col md={4}>
                            <form action="" method="post">
                                <div className="form-group mb-3">
                                    <label htmlFor="name"  className="block mb-2">Full Name</label>
                                    <input className="form-control" type="text" id="name" name="name" required  placeholder="Sunil Parmar"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email"  className="block mb-2">Email Address</label>
                                    <input className="form-control" type="email" id="email" name="email" required  placeholder="sunilparmar51@gmail.com" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phone" className="block mb-2">Phone Number</label>
                                    <input className="form-control w-full px-3 py-2 placeholder-gray-300 border" type="number" id="phone" name="phone" required placeholder="+91 99779-96828" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message"  className="block mb-2">Your Message</label>
                                    <textarea rows="5" name="message" id="message" className="form-control w-full px-3 py-2 placeholder-gray-300 border" placeholder="Your Message" required/>
                                </div>
                                <div className="text-center">
                                    <Button variant="primary" type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        
                        </Col>
                        <Col md={8}>
                            <div className="mapWrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1918690793727!2d75.93572447504515!3d22.758259726140487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d7c682686e9%3A0x8186e06741ebfd8b!2sMalwa%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1711388040196!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Contact;
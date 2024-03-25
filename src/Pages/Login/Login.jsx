import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CounterApp from "../../Components/Counter/Counter";

function Login () {
    return (
        <>
            <div className="loginWrapper my-3">
                <h3 className="text-center">Please fill details for see counter working</h3>
            </div>
            <Container>
                    <Row>
                        <Col md={4} className="mt-5">
                            <form action="" method="post">
                                <div className="form-group mb-3">
                                    <label htmlFor="name"  className="block mb-2">Full Name</label>
                                    <input className="form-control" type="text" id="name" name="name" required  placeholder="Sunil Parmar"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email"  className="block mb-2">Email Address</label>
                                    <input className="form-control" type="email" id="email" name="email" required  placeholder="sunilparmar51@gmail.com" />
                                </div>
                            </form>
                        </Col>
                        <Col md={8} className="text-center">
                            <h3>Counter App</h3>
                            <CounterApp />
                        </Col>
                    </Row>
                </Container>
            
        </>
    )
}
export default Login;
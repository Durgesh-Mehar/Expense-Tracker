import React, { useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/AuthSlicer";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function LogIn() {
  const history = useNavigate();
  const emailInputref = useRef();
  const passwordInputref = useRef();
  const dispatch = useDispatch();



  //   const handleForgotPassword = (e) => {
  //       e.preventDefault();
  //       const enteredEmail = emailInputref.current.value;

  //       fetch('https://http://localhost:3000/login',{
  //           method:"POST",
  //           body:JSON.stringify({
  //               requestType:"PASSWORD_RESET",
  //               email:enteredEmail
  //           }),
  //           headers:{
  //               'Content-Type':'application/json'
  //           }
  //       }).then((res)=>{
  //           if(res.ok){
  //               return res.json();
  //           }else{
  //               return res.json().then((data)=>{
  //                   if(data && data.error && data.error.message){
  //                       let errMessage = "Authentication Failed, " + data.error.message;
  //                       throw new Error(errMessage);
  //                   }
  //               })
  //           }
  //       }).then((data)=>{
  //           console.log(data);
  //           console.log("Forgrt Password  Link are Sending Sussesfully")
  //       }).catch((err)=>{
  //           alert(err.meassage);
  //       })
  // }
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputref.current.value;
    const password = passwordInputref.current.value;
    localStorage.setItem("userEmail", email);
    //console.log(enteredEmail,enteredpassword)

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      });
  
      if (response.ok) {
        // Handle successful signup
        alert('User Login up successfully')
        console.log('User login up successfully');
        history('/welcome');
      } else {
        // Handle signup error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Sign In
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          ref={emailInputref}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          ref={passwordInputref}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                        {/* <p className="mb-0  text-center">
                        Forget passward??{" "}
                          <Link className="text-primary fw-bold"onClick={handleForgotPassword} >forget passward</Link>
                        </p> */}
                        <p className="mb-0  text-center">
                        Create New Account??{" "}
                          <Link to="/signup" className="text-primary fw-bold">Sign Up</Link>
                        </p>
                    </div>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React, { useRef } from "react";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

 function ExpenseForm(props) {
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const expenseData = {
      Amount: amountInputRef.current.value,

      Description: descriptionInputRef.current.value,

      Category: categoryInputRef.current.value,
    };

    //we add  expenses data to Firebase!!!

    const response = await fetch(
      'https://expense-tracker-3d3d0-default-rtdb.firebaseio.com/expensedata.json',
      {
        method: "POST",
        body: JSON.stringify(expenseData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  
    
    //can save in an array

    console.log(expenseData);

    props.setExpensesData((data) => [...data, expenseData]);
  }

  return (
    <Container
      className="p-3 my-3  text-white"
      style={{ backgroundColor: "#b3adba" }}
    >
      <Form onSubmit={submitHandler} id="expenses">
        <Row>
          <Col className="form-control">
            <input
              type="number"
              placeholder="Amount"
              name="Amount"
              ref={amountInputRef}
              required
            ></input>
          </Col>

          <Col className="form-control">
            <textarea
              style={{ height: "25px" }}
              type="text"
              placeholder="Description"
              name="Description"
              ref={descriptionInputRef}
              required
            ></textarea>
          </Col>

          <Col className="form-control">
            <select ref={categoryInputRef} name="Category" required>
              <option>Food</option>

              <option>Petrol</option>

              <option>Clothes</option>

              <option>other..</option>
            </select>
          </Col>

          <Col className="mt-5">
            <Button type="submit" variant="success">
              Add New Expense
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ExpenseForm;

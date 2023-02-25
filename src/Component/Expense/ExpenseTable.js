import React, { Fragment, useEffect, useState, useCallback } from "react";

function ExpenseTable(props) {
  const getExpenseData = async () => {
    const response = await fetch(
      "https://expense-tracker-3d3d0-default-rtdb.firebaseio.com/expensedata.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const transformedData = [];

        for (const key in data) {
          transformedData.push({
            id: key,
            Category: data[key].Category,
            Description: data[key].Description,
            Amount: data[key].Amount,
          });
        }
        props.setExpensesData(transformedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getExpenseData();
  }, []);

  
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Expenses</h1>
      <div>
        {props.expensesData.map((expense, index) => (
          <div
            className=" d-flex justify-content-around mx-5 p-1 shadow"
            key={index}
          >
            <p>Amount: $ {expense.Amount}</p>
            <p class="text-justify">Description : {expense.Description}</p>
            <p>Category : {expense.Category}</p>
          </div>
        ))}
      </div>
      ;
    </Fragment>
  );
}

export default ExpenseTable;

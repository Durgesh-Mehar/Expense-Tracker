import React, { Fragment } from 'react';

function ExpenseTable(props) {
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
            </div>;
    </Fragment>
    );
}

export default ExpenseTable;
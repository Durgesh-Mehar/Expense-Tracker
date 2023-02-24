import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";

function Expense() {
    const [expensesData,setExpensesData] =useState([]);
    console.log(expensesData)
    return (
        <>
            <section>
                <ExpenseForm  setExpensesData={setExpensesData} />
                <ExpenseTable expensesData={expensesData} />
            </section>
        </>
    );
}

export default Expense;
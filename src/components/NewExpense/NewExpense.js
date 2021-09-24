import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css' 

const NewExpense = (props) => {
    const [openExpenseForm,setOpenExpenseForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setOpenExpenseForm(false);
    }

    const startEditingHandeler = () => {
        setOpenExpenseForm(true);
    };

    const stopEditingHandeler = () => {
        setOpenExpenseForm(false);
    };

    return (
        <div className="new-expense">
            {!openExpenseForm && <button onClick={startEditingHandeler} >Add New Expense</button>}
            {openExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandeler} />}
        </div>
    )
}

export default NewExpense

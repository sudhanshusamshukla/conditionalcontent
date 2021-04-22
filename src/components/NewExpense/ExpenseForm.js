import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    //separate way to do or you can combine in a single state into
    //multiple state 
    // const inputChangeHandler = (e) => {
    //     // console.log(e.target.value);
    //     setEnteredTitle(e.target.value);
    // }

    //Multiple state eg below
    //also not correct way
    // const inputChangeHandler = (e) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: e.target.value,
    //     });
    // };

    //best approach,reacts schedule update
    //gurantee state snapshot will always be the latest
    //if your state depends on prevState we should use
    //this approach
    // const inputChangeHandler = (e) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: e.target.value };
    //     });
    // };
    // const amountChangeHandler = (e) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: e.target.value };
    //     });
    // };
    // const dateChangeHandler = (e) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: e.target.value };
    //     });
    // };

    const inputChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    };




    return (
        
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title </label>
                    <input type="text" className="input"
                        value={enteredTitle}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount </label>
                    <input type="text"
                        value={enteredAmount} min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date </label>
                    <input type="date"
                        value={enteredDate} min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
       
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>

            </div>
        </form>
    )
}

export default ExpenseForm;
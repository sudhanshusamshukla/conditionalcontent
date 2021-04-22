import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no Expenses!</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((exp) => (
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            ))}
        </ul>
    )
}

export default ExpenseList;
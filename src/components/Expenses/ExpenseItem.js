import "./ExpenseItem.scss";

import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";

function ExpenseItem(props) {
  const rawDate = props.date;

  return (
    <Card className="expense-item">
      <ExpenseDate date={rawDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

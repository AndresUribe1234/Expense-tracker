import "./ExpenseItem.scss";

import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const rawDate = props.date;

  const clickedHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={rawDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={clickedHandler}>Click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

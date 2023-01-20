import "./ExpenseItem.scss";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const rawDate = props.date;

  console.log(props);
  return (
    <div className="expense-item">
      <ExpenseDate date={rawDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

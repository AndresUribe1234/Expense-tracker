import "./ExpenseDate.scss";

function ExpenseDate(props) {
  const yearDate = props.date.getFullYear();
  const monthDate = props.date.toLocaleString("en-US", { month: "long" });
  const dayDate = props.date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthDate}</div>
      <div className="expense-date__year">{yearDate}</div>
      <div className="expense-date__day">{dayDate}</div>
    </div>
  );
}

export default ExpenseDate;

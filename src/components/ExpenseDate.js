import "./ExpenseDate.scss";

function ExpenseDate(props) {
  const yearDate = props.date.getFullYear();
  const monthDate = props.date.toLocaleString("en-US", { month: "long" });
  const dayDate = props.date.getDate();

  return (
    <div>
      <div>{monthDate}</div>
      <div>{yearDate}</div>
      <div>{dayDate}</div>
    </div>
  );
}

export default ExpenseDate;

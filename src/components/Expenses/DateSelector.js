import "./DateSelector.scss";

function DateSelector(props) {
  const yearHandler = (event) => {
    const yearSelected = event.target.value;
    props.onSelectYear(yearSelected);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearHandler} value={props.selected}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default DateSelector;

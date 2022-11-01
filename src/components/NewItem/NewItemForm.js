import { useState } from "react";
import InputManipulation from '../functions/InputManipulation'
import dateManipulation from "../functions/DateManipulation";

const NewItemForm = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date((new Date()).getTime() + 100000000));
  const [time, setTime] = useState("23:59");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const dateChangeHandler = (event) => {
    const bufferDate = new Date(event.target.value);
    bufferDate.setMinutes(
      bufferDate.getMinutes() + bufferDate.getTimezoneOffset()
    );
    setDate(bufferDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(InputManipulation.isEmpty(name)) return;

    date.setHours(time.slice(0, 2));
    date.setMinutes(time.slice(3, 5));

    props.onAdd({ name: name, date: date });
    setName("");
    setDate(new Date((new Date()).getTime() + 100000000));
    setTime('23:59');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input
          type={"text"}
          value={name}
          onChange={nameChangeHandler}
          className="form_input_text"
        ></input>
      </div>
      <div>
        <label>Date: </label>
        <input
          className="form_input_text"
          type={"date"}
          value={dateManipulation.toDateValue(date)}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div>
        <label>Time: </label>
        <input
          className="form_input_text"
          type={"time"}
          value={time}
          onChange={timeChangeHandler}
        ></input>
      </div>
      <input type={"submit"} hidden />
      <button type="submit" className="item_button form_button">Add</button>
    </form>
  );
};

export default NewItemForm;

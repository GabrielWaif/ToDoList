import ItemsButtons from "./ItemsButtons";
import { useState } from "react";
import dateManipulation from "../functions/DateManipulation";
import InputManipulation from "../functions/InputManipulation";

const Item = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.item.name);
  const [time, setTime] = useState(props.item.date);

  const switchIsEditing = () => {
    if (!isEditing) setIsEditing(true);
    else {
      setIsEditing(false);
    }
    setName(props.item.name);
    setTime(props.item.date);
  };

  const sendIdDelete = () => {
    props.onDelete(props.item.id);
  };

  const saveInfo = (event) => {
    if(InputManipulation.isEmpty(name)) return;
    props.onSaveEdit(
      {
        name: name,
        date: time,
      },
      props.item
    );
    setIsEditing(false);
  };

  const editSubmitHandler = (event) => {
    event.preventDefault();

    saveInfo();
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const timeChageHandler = (event) => {
    const teste = new Date(event.target.value);
    teste.setMinutes(teste.getMinutes() + teste.getTimezoneOffset());

    setTime(teste);
  };

  const completeItem = () => {
    props.onComplete(props.item);
  };

  return (
    <div className="card item_container">
      {isEditing ? (
        <form onSubmit={editSubmitHandler}>
          <input type={"text"} value={name} onChange={nameChangeHandler} />
          <input
            value={dateManipulation.toDateValue(time)}
            type={"date"}
            onChange={timeChageHandler}
          />
          <input type={"submit"} hidden />
        </form>
      ) : (
        <div>
          <h2 className="item_name">{props.item.name}</h2>
          <h4 className="date_info">{dateManipulation.showString(time)}</h4>
        </div>
      )}
      <ItemsButtons
        onComplete={completeItem}
        onDelete={sendIdDelete}
        onEditStart={switchIsEditing}
        onSave={saveInfo}
        isEditing={isEditing.toString()}
        isComplete={props.item.isComplete.toString()}
      />
    </div>
  );
};

export default Item;

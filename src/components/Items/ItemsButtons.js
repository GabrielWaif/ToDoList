import ItemButton from "./ItemButton";

const ItemsButtons = (props) => {
  const isEditing = props.isEditing === "true";
  const isComplete = props.isComplete === "true";

  const editClickHandler = () => {
    props.onEditStart();
  };

  const deleteClickHandler = () => {
    props.onDelete();
  };

  const confirmClickHandler = () => {
    props.onSave();
  };

  const completeClickHandler = () => {
    props.onComplete();
  };

  return (
    <div className="item_buttons_container">
      {isEditing && (
        <ItemButton
          func={confirmClickHandler}
          name={"confirm"}
          icon={"Check"}
        />
      )}
      {isEditing && (
        <ItemButton func={deleteClickHandler} name={"delete"} icon={"Delete"} />
      )}
      {!isEditing && (
        <ItemButton
          func={completeClickHandler}
          name={"complete"}
          icon={!isComplete ? "arrow_downward" : "arrow_upward"}
        />
      )}
      <ItemButton func={editClickHandler} name={"edit"} icon={"Edit"} />
    </div>
  );
};

export default ItemsButtons;

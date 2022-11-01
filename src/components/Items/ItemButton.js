const ItemButton = (props) => {
  return (
    <button onClick={props.func} className={`${props.name}_button item_button`}>
      <span className="material-symbols-outlined">{props.icon}</span>
    </button>
  );
};

export default ItemButton;

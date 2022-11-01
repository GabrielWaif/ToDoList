import Item from "./Item";

const Items = (props) => {

  return (
    <div>
      <h2>Registered to do's:</h2>
      <div>
        <h4>On going:</h4>
        {props.onGoing.length === 0 && (<p className="null_text">0 on going items.</p>)}
        {props.onGoing.length > 0 && (
          <div>
            {props.onGoing.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onDelete={props.onDelete}
                  onComplete={props.onComplete}
                  onSaveEdit={props.onSaveEdit}
                ></Item>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <h4>Completed:</h4>
        {props.completed.length === 0 && (<p className="null_text">0 on completed items.</p>)}
        {props.completed.length > 0 && (
          <div>
            {props.completed.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onDelete={props.onComplete}
                  onComplete={props.onComplete}
                  onSaveEdit={props.onSaveEdit}
                ></Item>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;

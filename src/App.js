import Items from "./components/Items/Items";
import NextTaskTimer from "./components/NextTaskTimer";
import NewItemForm from "./components/NewItem/NewItemForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const onGoing = []; 
  const complete = []; 

  items.forEach(item => {
    if(item.isComplete) complete.push(item);
    else onGoing.push(item);
  });

  const closestTask = (() => {
    if(onGoing.length === 0 ) return;
    let closest = onGoing[0];
    onGoing.forEach(item => {
      if(item.date < closest.date){
        closest = item 
      }
    });
    return closest
  })();

  const deleteId = (idToDelete) => {
    setItems((prevState) => {
      return prevState.filter((item) => {
        return item.id !== idToDelete;
      });
    });
  };

  const saveEdit = (object, oldObject) => {
    setItems((prevState) => {
      const index = prevState.indexOf(oldObject);
      if (index > -1) {
        prevState[index].name = object.name.trim();
        prevState[index].date = object.date;
      }
      return prevState;
    });
  };

  const addNewItem = (object) => {
    let newId = 0
    if(items.length > 0) newId = (items[0].id + 1);
    setItems((prevStatus) => {
      object = { ...object, id: newId, isComplete: false};
      return [object, ...prevStatus];
    });
  };

  const completeItem = (object) => {
    setItems((prevState) => {
    const index = items.indexOf(object);
    if (index > -1){
      prevState[index].isComplete = !prevState[index].isComplete;
    }
    return [...prevState];
    });
  };

  return (
    <div className="card_ev card">
      <h1 style={{textAlign:'center', margin: '10px 0'}}>To Do List</h1>
      <NewItemForm onAdd={addNewItem} />
      {onGoing.length > 0 && (<NextTaskTimer closest={closestTask}/>)}
      <Items onGoing={onGoing} onComplete={completeItem} completed={complete} onDelete={deleteId} onSaveEdit={saveEdit} items={items}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else return [];
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [showItem, setshowItem] = useState(getLocalItems());
  const [editItem, setEditItem] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const addItem = () => {
    if (inputData.length === 0) {
      alert("cannot set task empty");
    } else if (editItem !== null) {
      const updatedItems = showItem.map((item, index) => {
        if (index === editItem) {
          return inputData;
        }
        return item;
      });
      setshowItem(updatedItems);
      setEditItem("");
    } else {
      setshowItem([...showItem, inputData]);
      setInputData("");
    }
  };
  const editTask = (id) => {
    setEditItem(id);
    setEditedValue(showItem[id]);
    setInputData(showItem[id]);
    console.log(id);
  };
  const removeItem = (id) => {
    const updatedItems = showItem.filter((item, index) => {
      return index !== id;
    });
    setshowItem(updatedItems);
  };
  const clearAll = () => {
    setshowItem([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(showItem));
  }, [showItem]);

  return (
    <>
      <div className="container">
        <div className="child-div">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/todo-list--v1.png"
            alt="todo-list--v1"
          />
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Task"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="inp"
            />

            <button className="btn" onClick={addItem}>
              {editItem !== null ? "🖊" : "➕"}
            </button>
          </div>
          <div className="show-item">
            {showItem.map((item, index) => (
              <div className="each-item" key={index}>
                <h3>{item}</h3>
                <button className="btn" onClick={() => removeItem(index)}>
                  ⛔
                </button>
                <button className="btn" onClick={() => editTask(index)}>
                  🖊
                </button>
              </div>
            ))}
          </div>
          <div className="remove-all">
            {showItem.length > 0 && (
              <button className="btn" onClick={() => clearAll()}>
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;

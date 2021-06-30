import React, { useState } from "react";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const AddItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
          Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={AddItem}>Add</button>

      <br></br>
      <br></br>
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;

import React, { useState } from "react";

// import Forms from "./Forms";

export default function List({ task, addList, deletedList, updatedList }) {
  const [check, setCheck] = useState(false);
  const [completed, setCompleted] = useState(false)

  // console.log('valeus', check);
  console.log(task);

  return (
    <div>
      <main
        className="item"
        style={check || task.status === "Done"
            ? ({ backgroundColor: "grey", textDecoration: "line-through" })
            :{ backgroundColor: "white" }
        }
      >
        <div className="item-name">
          <input
            type="checkbox"
            className="check"
            name="Check"
            checked={check}
            onChange={() => setCheck(!check)} 
            
          />

          <p onClick={() => updatedList(task.id) }  >{task.list}</p>
        </div>

        <div className="item-price">
          <p>{task.price}</p>
          <p>{task.qty}</p>
          <button onClick={() => deletedList(task.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

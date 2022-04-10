import React, { useState } from "react";

// import Forms from "./Forms";

export default function List({task, addList, deletedList, updatedList}) {
  const [check, setCheck] = useState(false);

   console.log(task)
  const checking = (id) => {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  return (
    <div>
        <main className="item" style={check || task.status === "Done"? {backgroundColor: "grey", textDecoration: "line-through"}:  {backgroundColor: "white"}}>
        
        
        <div className="item-name">
          <input
            type="checkbox"
            className="check"
            name="Check"
            checked={check}
            onChange={() => checking(task.id)} onClick={() => updatedList(task.id)}
          />

          <p>{task.list}</p>
        </div>

        <div className="item-price">
          <p>{task.price}</p>
          <p>{task.qty}</p>
          <button onClick={() => deletedList(task.id)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      

       
        </main>
      
      
    </div>
  );
}

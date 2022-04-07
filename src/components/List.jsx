import React, { useState } from "react";

// import Forms from "./Forms";

export default function List({task, addList, deletedList}) {
  const [check, setCheck] = useState(false);

  console.log(task)
  const checking = () => {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  return (
    <div>
        <main className="item" style={check ? {backgroundColor: "gray"}: {backgroundColor: "white"}}>
        
        
        <div className="item-name">
          <input
            type="checkbox"
            className="check"
            name="Check"
            checked={check}
            onChange={() => checking()}
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

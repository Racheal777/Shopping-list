import React, { useState } from "react";

// import Forms from "./Forms";

export default function List({task, addList, deletedList, updatedList}) {
  const [check, setCheck] = useState(false);
  const [completed, setCompleted] = useState(false)

   console.log(task)
  const checking = (id) => {
    if (check === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };


  const checkStatus = () => {
    if(task.status === "Done"){
      setCompleted(true)
      setCheck(true)
    }else{
      setCompleted(false)
    }
  }
  return (
    <div>

      
      
        <main style={ 
          
          
          completed && {backgroundColor: "grey", textDecoration: "line-through"}}>
        
        <div className="item-name">
          <input
            type="checkbox"
            className="check"
            name="Check"
            checked={check}
            onChange={() => checking(task)} onClick={() => updatedList(task.id)}
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";

export default function Lists({ list, addList, deletedList }) {
    console.log(list);
  return (
    <div>
      <section >
         
        <div>
        

          {list.length ? (
            
            list.map((todo, i) => (
              <div key={i}>
                <List task={todo} addList={addList} deletedList={deletedList} />
              </div>
            )) 
            
          )
           : (
            <p className="not">Nothing to buy yet</p>
          )}
        </div>
       
      </section>
    </div>
  );
}

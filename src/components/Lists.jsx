import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

export default function Lists({ list, addList, deletedList, updatedList }) {
  // console.log(list);
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const [budget, SetBudget] = useState(0);

  const addBudget = () => {
    SetBudget(budget);

    toggle();
  };
  return (
    <div>
      
        
        <div>
          {list.length ? (
            <div>
              <div className="title">
                <p>Item</p>

                <div className="title2">
                  <p>Price(GHC)</p>
                  <p>Qty</p>
                </div>
              </div>

              {list.map((todo, i) => (
                <div key={i}>
                  <List
                    task={todo}
                    addList={addList}
                    deletedList={deletedList}
                    updatedList={updatedList}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="not">Nothing to buy yet</p>
          )}
        </div>
      
    </div>
  );
}

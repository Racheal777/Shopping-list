import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

export default function Lists({ list, addList, deletedList, updatedList }) {
    // console.log(list);
     // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
    const [budget, SetBudget] = useState(0)

    const addBudget = () => {
      SetBudget(budget)
      
      toggle()
    }
  return (
    <div>
      <section >
         
      <div className="amounts">
            <p>Current budget GHC</p>
            
            
         
            <div className="all" style={{
            // display: "flex",
            // width: 1500,
            // padding: 0,
            // marginBottom: 20
            }} >
              
              <h4>{budget}</h4>
            
             
              {/* <label></label> */}
             <div>
             
          <Button color="success" onClick={toggle} data-toggle="tooltip" 
          data-placement="" title="Add your Budget">     
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
          </div> 

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="modals">
              Add Your Budget
            </ModalHeader>
            <ModalBody className="modals">
            <form className="forms">
                <div>
                  <label> Amount</label>
                  <input
                    type="number"
                    placeholder="enter your current budget"
                    value={budget}
                    onChange={(e) => SetBudget(e.target.value)}
                  />
                </div>
                </form>

            </ModalBody>
            <ModalFooter className="modals">
              <Button color="success" onClick={addBudget} disabled={!budget}>Add </Button>
            </ModalFooter>
          </Modal>
        </div>
          </div>
        <div>
        
        

          {list.length ? 
            
           (
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
                <List task={todo} addList={addList} deletedList={deletedList} updatedList={updatedList} />
              </div>
            )) }
            </div>
            
          )
            
            
          
           : (
            <p className="not">Nothing to buy yet</p>
          )}
        </div>
       
      </section>
    </div>
  );
}

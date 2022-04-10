import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import {  useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import "./form.css";


function App() {
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [lists, setLists] = useState([]);
  const [category, setCategory] = useState()
  const [budget, SetBudget] = useState(0)

  const addList = (e) => {
    e.preventDefault();
    const list = {
      id: lists.length + 1,
      list: input,
      price: price,
      qty: qty,
      status: "Pending",
      category: category
    };

    setLists([...lists, list]);
    setInput("");
    setPrice();
    setQty();
    toggle();
  };

  
 //updating a list status
 //mapping through to get all the list
 //spreading the object with spread operator to get access to individual item
 //if status is pending change to done else pending
 const updatedList = (id) => {
   
   const updated = lists.map((list) => {
     return list.id === id? {...list, status: list.status === "Pending" ? "Done": "Pending"}:
     {...list}    
   })
   setLists([...updated])
  //  console.log(list);

 } 

// const updatedList = (id) => {
//   const updated = lists.map((item) => {
//     return item.id === id? {...item, status: item.status === "Pending" ? "Done" : "Pending"}:
//     {...item}
//   })
//   setLists(updated)
//   console.log(updated)
// }

  //deleting a list
  const deletedList = (id) => {
    const deleted = lists.filter((item) => item.id !== id)
    console.log(deleted)
    setLists([...deleted])
  }
  
  return (
    <div className="App">
      <div className="main-page">
        <h2> Shopping List</h2>
        <p>Hello, Racheal what are you going to buy</p>
        <section>
          <div className="text">
            <h2>Categories</h2>
          </div>

          <div className="categories">
            <div className="categories-card">
              <p>10 tasks</p>
              <h4>Groceries</h4>
            </div>

            <div className="categories-card">
              <p>10 tasks</p>
              <h4>General</h4>
            </div>
          </div>         
        </section>       

        <Lists list={lists} deletedList={deletedList} updatedList={updatedList}/>

        <section>
          <div className="amount">
            {/* <button onClick={addPrice}>add price</button> */}
            {/* <p>Total Amount</p>
            <h4> GHC {total}</h4> */}
          </div>

          <div className="amount">
            {/* <p>Remaining Cash</p> */}
            {/* <h4> GHC 400.00</h4> */}
          </div>
        </section>

       

        <div className="form-but">
          <Button color="primary" onClick={toggle} data-toggle="tooltip" 
          data-placement="" title="Add your List">
            {" "}
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="modals">
              Add a List{" "}
            </ModalHeader>
            <ModalBody className="modals">
              <form className="forms" onSubmit={addList}>
                <div>
                  <label> Name</label>
                  <input
                    type="text"
                    placeholder="add a todo ...."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>

                <div className="price">
                  <div>
                    <label>Price</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={qty}
                      defaultValue= {1}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </div>
                </div>

                <div className="select">
                  <label for="cars">Choose a Category:</label>
                  <select value='General' onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Groceries">Groceries</option>
                  </select>
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="modals">
              <Button color="primary" onClick={addList} disabled={!input}>
                {" "}
                Add a todo
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import "./form.css";


function App() {
  // Modal open state
  const [modal, setModal] = useState(false);
  const [modals, setModals] = useState(false);
  const [modalss, setModalss] = useState(false);

  

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const Ontoggle = () => setModals(!modals);
  const Ontoggles = () => setModalss(!modalss);

  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [lists, setLists] = useState([]);
  // const [category, setCategory] = useState('General')
  const [budget, SetBudget] = useState()
  const [dark, setDark] = useState(false)

  const addList = (e) => {
    e.preventDefault();
    const list = {
      id: lists.length + 1,
      list: input,
      price: parseInt(price, 10),
      qty: parseInt(qty, 10),
      status: "Pending",
      // category: category
    };

    setLists([...lists, list]);
    setInput("");
    setPrice(0);
    setQty(0);
    toggle();
  };

  //adding budget
  const addBudget = () => {
    SetBudget(parseInt(budget, 10))
    console.log(budget)
    
    Ontoggle()
  }

  //Updating a budget
  const updateBudget = () => {
    SetBudget(parseInt(budget, 10))
    Ontoggles()
  }

  //updating a list status
  //mapping through to get all the list
  //spreading the object with spread operator to get access to individual item
  //if status is pending change to done else pending
  const updatedList = (id) => {

    const updated = lists.map((list) => {
      return list.id === id ? { ...list, status: list.status === "Pending" ? "Done" : "Pending" } :
        { ...list }
    })
    setLists([...updated])
    //  console.log(list);

  }



  //deleting a list
  const deletedList = (id) => {
    const deleted = lists.filter((item) => item.id !== id)
    console.log(deleted)
    setLists([...deleted])
  }


  //dark mode
  const darkMode = () => {
    if (dark === false) {
      setDark(true)
    } else {
      setDark(false)
    }
  }

  console.log(dark)

  return (
    <div className="App">

      <div className="btn">
        <button className="toggle" onClick={darkMode}><i className="fa-solid fa-moon"></i></button>
      </div>


      <div className="main-page">

        <p>Hello, Racheal what are you going to buy</p>
        <section>
          <div className="text">

          </div>

          {/* <div className="categories">
            <div className="categories-card">
              <p>10 tasks</p>
              <h4>Groceries</h4>
            </div>

            <div className="categories-card">
              <p>10 tasks</p>
              <h4>General</h4>
            </div>

          </div> */}
        </section>

        <section>
        <div className="amounts">
          <p>Current budget GHC</p>

          <div className="all" style={{}}>
           <h4>{budget}</h4>
 
            {budget > 100 ? (
              <>
              <div>
              <Button
                color="success"
                onClick={Ontoggles}
                data-toggle="tooltip"
                data-placement=""
                title="Add your Budget"
                disabled={!budget}
              >
                <i className="fa-solid fa-circle-plus"></i>
                Edit
              </Button>
            </div>

            <Modal isOpen={modalss} toggle={Ontoggles}>
              <ModalHeader toggle={Ontoggles} className="modals">
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
                <Button color="success" onClick={updateBudget} disabled={!budget}>
                  Edit{" "}
                </Button>
              </ModalFooter>
            </Modal>
              
            </>
              
            ) : (

            


          
            <>

            <div>
              <Button
                color="success"
                onClick={Ontoggle}
                data-toggle="tooltip"
                data-placement=""
                title="Add your Budget"
                // disabled = {budget}
              >
                <i className="fa-solid fa-circle-plus"></i>
              </Button>
            </div>

            <Modal isOpen={modals} toggle={Ontoggle}>
              <ModalHeader toggle={Ontoggle} className="modals">
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
                <Button color="success" onClick={addBudget} disabled={!budget}>
                  Add{" "}
                </Button>
              </ModalFooter>
            </Modal>
          </>
          )}
          
        </div>
        
        </div>
       
        </section>

        <Lists list={lists} deletedList={deletedList} updatedList={updatedList} />

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


            { budget > 0  && (

           
        <div className="form-but">
          <Button color="primary" onClick={toggle} data-toggle="tooltip"
            data-placement="" title="Add your List">
            {" "}
            <i className="fa-solid fa-circle-plus"></i>
          </Button>

          <Modal isOpen={modal} toggle={!toggle}>
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
                      type="Number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={qty}
                      defaultValue={1}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="select">
                  <label for="">Choose a Category:</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Groceries">Groceries</option>
                  </select>
                </div> */}
              </form>
            </ModalBody>
            <ModalFooter className="modals">
              <Button color="primary" onClick={addList} disabled={!input && !price && !qty }>
                {" "}
                Add a todo
              </Button>
            </ModalFooter>
          </Modal>
        </div>

         )}

      </div>
    </div>
  );
}

export default App;

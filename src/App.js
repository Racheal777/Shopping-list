import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { Tooltip } from "reactstrap";

import "./form.css";

function App() {
  // Modal open state
  const [modal, setModal] = useState(false);
  const [modals, setModals] = useState(false);
  const [modalss, setModalss] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tool, setTool] = useState(false);
  const [edittool, seteditTool] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const Ontoggle = () => setModals(!modals);
  const Ontoggles = () => setModalss(!modalss);

  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState();
  const [lists, setLists] = useState([]);
  // const [category, setCategory] = useState('General')
  const [budget, SetBudget] = useState();
  const [dark, setDark] = useState(false);

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
    SetBudget(parseInt(budget, 10));
    console.log(budget);

    Ontoggle();
  };

  //Updating a budget
  const updateBudget = () => {
    SetBudget(parseInt(budget, 10));
    Ontoggles();
  };

  //updating a list status
  //mapping through to get all the list
  //spreading the object with spread operator to get access to individual item
  //if status is pending change to done else pending
  const updatedList = (id) => {
    const updated = lists.map((list) => {
      return list.id === id
        ? { ...list, status: list.status === "Pending" ? "Done" : "Pending" }
        : { ...list };
    });
    setLists([...updated]);
    //  console.log(list);
  };

  //deleting a list
  const deletedList = (id) => {
    const deleted = lists.filter((item) => item.id !== id);
    console.log(deleted);
    setLists([...deleted]);
  };

  //function to add items. total
  const totalAmount = () => {
    let totalPrice = price * qty;
    const alltotal = lists.reduce(function (x, y) {
      console.log(x);
      console.log(y);
      return x + y.price * y.qty;
    }, 0);
    setTotal(alltotal);
    console.log(alltotal);
  };

  //dark mode
  const darkMode = () => {
    if (dark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  // console.log(dark)

  return (
    <div className="App">
      <div className="btn">
        <button className="toggle" onClick={darkMode}>
          <i className="fa-solid fa-moon"></i>
        </button>
      </div>

      <div className="main-page">
        <p>Hello, Racheal what are you going to buy</p>
        <section>
          <div className="text"></div>
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
                      id="TooltipExample"
                      disabled={!budget}
                    >
                      <i className="fa-solid fa-circle-plus"></i>
                      Edit
                    </Button>

                    <Tooltip
                      isOpen={tool}
                      placement="right"
                      target="TooltipExample"
                      toggle={() => {
                        setTool(!tool);
                      }}
                    >
                      Edit Your Budget
                    </Tooltip>
                  </div>

                  <Modal isOpen={modalss} toggle={Ontoggles}>
                    <ModalHeader toggle={Ontoggles} className="modals">
                      Edit Your Budget
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
                      <Button
                        color="success"
                        onClick={updateBudget}
                        disabled={!budget}
                      >
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
                      id="TooltipExample"
                      // disabled = {budget}
                    >
                      <i className="fa-solid fa-circle-plus"></i>
                    </Button>

                    <Tooltip
                      isOpen={tooltipOpen}
                      placement="right"
                      target="TooltipExample"
                      toggle={() => {
                        setTooltipOpen(!tooltipOpen);
                      }}
                    >
                      Add Your Budget
                    </Tooltip>
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
                      <Button
                        color="success"
                        onClick={addBudget}
                        disabled={!budget}
                      >
                        Add{" "}
                      </Button>
                    </ModalFooter>
                  </Modal>
                </>
              )}
            </div>
            {total && <p>Remaining balance is {budget - total} Ghc</p>}
            
          </div>
        </section>

        <Lists
          list={lists}
          deletedList={deletedList}
          updatedList={updatedList}
        />

        <section>
         
          {lists.length > 1 && (
            <div>
              <button className="total-btn" onClick={totalAmount}>
                Get Total
              </button>
              {total && <h3>Amount spent is {total} GHC</h3>}
              
            </div>
          )}
        </section>

        {budget > 0 && (
          <div className="form-but">
            <Button color="primary" onClick={toggle} id="Tooltips">
              {" "}
              <i className="fa-solid fa-circle-plus"></i>
            </Button>
            <Tooltip
              isOpen={edittool}
              placement="right"
              target="Tooltips"
              toggle={() => {
                seteditTool(!edittool);
              }}
            >
              Add Your List
            </Tooltip>

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
                </form>
              </ModalBody>
              <ModalFooter className="modals">
                <Button
                  color="primary"
                  onClick={addList}
                  disabled={!input && !price && !qty}
                >
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

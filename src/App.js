import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import { useState, useEffect,} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./form.css";

function App() {
  // Modal open state
  const [ modal, setModal ] = useState(false);
  const [ modals, setModals ] = useState(false);
  const [ modalss, setModalss ] = useState(false);
  const [ tooltipOpen, setTooltipOpen ] = useState(false);
  const [ tool, setTool ] = useState(false);
  const [ edittool, seteditTool ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const Ontoggle = () => setModals(!modals);
  const Ontoggles = () => setModalss(!modalss);

  const [ list, setList ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ quantity, setQuantity ] = useState(1);
  const [ total, setTotal ] = useState(0);
  const [ lists, setLists ] = useState([]);
  const [ budget, SetBudget ] = useState('');
  const [ dark, setDark ] = useState(false);
  const [user, setUser ] = useState('')

  const navigate = useNavigate()

  //adding items to the lists
  const addList = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log(JSON.parse(window.localStorage.getItem('userId')))
      const add = await axios.post(`http://localhost:7070/api/list/savelist/${JSON.parse(localStorage.getItem('userId'))}`, {
        list: list,
        price: parseInt(price, 10),
        quantity: parseInt(quantity, 10),
        userId: JSON.parse(localStorage.getItem('userId'))
        // userId,
      });

      setList("");
      setPrice(0);
      setQuantity(0);
      toggle();
      console.log(add.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //function to add items. total
  useEffect(() => {
    let alltotal = null;
    const totalAmount = () => {
      alltotal = lists.reduce(function (x, y) {
        return x + y.price * y.quantity;
      }, 0);
      setTotal(alltotal);
    };
    totalAmount();
  }, [loading, lists]);

  //displaying results
  useEffect(() => {
    const getData = async (id) => {
      const results = await axios.get(`http://localhost:7070/user//oneuser/${JSON.parse(localStorage.getItem('userId'))}`);
      if(budget){
        SetBudget(results.data.person.budget.budget) 
      }
     
      setLists(results.data.person.list)
      console.log(results.data)
    };

    getData();
  }, [loading]);

  //adding budget
  const addBudget = async () => {
    try {
      console.log("budgets");
      const budgeted = await axios.post(
        `http://localhost:7070/api/list/addbudget/${JSON.parse(localStorage.getItem('userId'))}`,
        {
          budget: parseInt(budget, 10),
          userId: JSON.parse(localStorage.getItem('userId'))
        }
      );
      Ontoggle();
      console.log(budgeted.data)
    } catch (error) {
      console.log(error);
    }
  };

  //updating a budget
  const updateBudget = async (id) => {
    try {
      setLoading(true);
      const budgeted = await axios.put(
        `http://localhost:7070/api/list/updatebudget/${id}`,
        {
          budget: parseInt(budget, 10),
        }
      );

      Ontoggles();
      console.log("updated", budgeted)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //displaying  a budget
  useEffect(() => {
    const showBudget = async () => {
      const results = await axios.get(
        `http://localhost:7070/api/list/getbudget/${JSON.parse(localStorage.getItem('userId'))}`
      );
        if(budget){
          SetBudget(results.data.oneBudget.budget);
        }
      
      // console.log(results.data)
    };
    showBudget();
  }, [loading]);

  //updating a list status
  //mapping through to get all the list
  //spreading the object with spread operator to get access to individual item
  //if status is pending change to done else pending
  const updatedList = async (id) => {
    try {
      setLoading(true);
      const getOne = await axios.get(
        `http://localhost:7070/api/list/getonelist/${id}`
      );
      const { data } = getOne;
      const { oneList } = data;

      if (oneList.status === "Pending") {
        const donestatus = await axios.put(
          `http://localhost:7070/api/list/updatelist/${oneList.id}`,
          {
            status: "Done",
          }
        );
        
      } else {
        const pendingstatus = await axios.put(
          `http://localhost:7070/api/list/updatelist/${oneList.id}`,
          {
            status: "Pending",
          }
        );
      }
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //deleting a list
  const deletedList = async (id) => {
    try {
      setLoading(true);
      const del = await axios.delete(
        `http://localhost:7070/api/list/deletelist/${id}`
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //dark mode
  const darkMode = () => {
    if (dark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  const logout = async() => {
    try {
     const loggingOut =  await axios.get('http://localhost:7070/user/logout', {
        withCredentials: true
      })

      if(loggingOut.data){
        navigate('/')
        window.localStorage.removeItem('userId')
        window.localStorage.removeItem('firstName')
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  // console.log(dark)

  return (
    <div className="App">
      <div className="btn-top">
        <button className="toggle" onClick={darkMode}>
          <i className="fa-solid fa-moon"></i>
        </button>

        <button className="logout" onClick={logout}>Logout</button>
      </div>

      <div className="main-page">
        <p>Hello, {window.localStorage.getItem('firstName')} what are you going to buy</p>
        <section>
          <div className="text"></div>
        </section>

        <section>
          <div className="amounts">
            <p>Current budget GHC</p>

            <div className="all" style={{}}>
              <h4>{budget}</h4>

              {/* {budget ? (
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
                      <form className="forms" onSubmit={updateBudget}>
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
              ) : ( */}
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
                      <form className="forms" onSubmit={addBudget}>
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
              {/* )} */}
            </div>
            {lists.length >= 1 && (
              <p>Remaining balance is {budget - total} Ghc</p>
            )}
          </div>
        </section>

        <Lists
          list={lists}
          deletedList={deletedList}
          updatedList={updatedList}
        />

        <section>
          {lists.length >= 1 && (
            <div>
              {/* <button className="total-btn">
                Get Total
              </button> */}
              <h3>Total Amount is {total} GHC</h3>
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
              toggle={() => seteditTool(!edittool)}
            >
              Add Your List
            </Tooltip>

            <Modal isOpen={modal} toggle={() => setModal(!toggle)}>
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
                      value={list}
                      onChange={(e) => setList(e.target.value)}
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
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter className="modals">
                <Button
                  color="primary"
                  onClick={addList}
                  disabled={!list && !price && !quantity}
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

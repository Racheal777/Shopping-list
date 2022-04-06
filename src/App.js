import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import { useState } from "react";
import Forms from "./components/Forms";

function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([
    {
      id: 1,
      list: "Dress",
      price: 500.0,
      qty: 3,
    },
  ]);

  const addList = (e) => {
    e.preventDefault();
    const list = {
      id: lists.length + 1,
      list: input,
      price: 50.0,
      qty: 2,
      status: "Pending",
    };

    setLists([...lists, list]);

    console.log(list);
  };

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

          <div className="amounts">
            <p>Current budget GHC</p>
            <h4>200.00</h4>
          </div>
        </section>

        <div className="title">
          <p>Item</p>

          <div className="title2">
            <p>Price</p>
            <p>Qty</p>
          </div>
        </div>

        <Lists list={lists} />

        <section>
          <div className="amount">
            <p>Total Amount</p>
            <h4> GHC 200.00</h4>
          </div>

          <div className="amount">
            <p>Remaining Cash</p>
            <h4> GHC 400.00</h4>
          </div>
        </section>

        <Forms addList={addList} />
      </div>
    </div>
  );
}

export default App;

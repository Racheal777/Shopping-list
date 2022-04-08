import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import "../form.css";

function Forms({ addList }) {

  console.log(addList);
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   const get = () => {
  //     if(modal === false) {
  //       setModal(true)
  //     } else {
  //       setModal(false)
  //     }
  //   }
  //   get();
  // }, [])

  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <Button color="primary" onClick={toggle}>
        {" "}
        <i class="fa-solid fa-circle-plus"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modals">
          Add a List{" "}
        </ModalHeader>
        <ModalBody className="modals">
          <form className="forms">
            <div>
              {/* <label> Name</label> */}
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
                <input type="number" />
              </div>

              <div>
                <label>Quantity</label>
                <input type="number" />
              </div>
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
  );
}

export default Forms;

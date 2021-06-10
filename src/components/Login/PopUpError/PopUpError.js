import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { UserContext } from "../../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const PopUpError = ({ modalIsOpen, closeModal }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //   const [modalIsOpen, setIsOpen] = useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center" style={{ color: "red" }}>
          {loggedInUser.error}
        </h2>
        <div className="text-center mt-4">
          <button
            className="text-center m-auto btn btn-danger"
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PopUpError;

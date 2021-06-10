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
      {loggedInUser.showError ? (
        ""
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{loggedInUser.error}</h2>
          <button onClick={closeModal}>close</button>
        </Modal>
      )}
    </div>
  );
};

export default PopUpError;

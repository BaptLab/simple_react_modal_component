import "./lib/modal.css";
import React from "react";

const Modal = (props) => {
  return props.trigger ? (
    <div id="modal" className="modal-window">
      <div className="modal-content">
        <button className="btn close-btn" onClick={() => props.setTrigger(false)}>
          {props.closingMsg}
        </button>
        {props.popUpMsg}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;

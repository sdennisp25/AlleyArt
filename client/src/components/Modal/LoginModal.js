import React from "react";
import "./Modal.css";

const LoginModal = ({show, handleClose, handleLogin, children }) => {
  return (
    <div className={`${show ? "modal display-block" : "modal display-none"} modal`}>
		<form>
      <div className="modal-content">
			        <button onClick={handleClose} className='modal-close right green-text'><i className='material-icons small'>X</i></button>
				{children}
			<div className="modal-footer">
				<button className="waves-effect grey darken-3 btn" onClick={handleLogin}>Submit</button>
			</div>
      </div>
			</form>
    </div>
  );
};

export default LoginModal;


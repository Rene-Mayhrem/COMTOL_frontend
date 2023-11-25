import React from "react";
import "./GoogleModal.css";
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../../context/AuthContext'

function GoogleModal({ setGoogleModal }) {

  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="google-modal">
      <div className="modal-container">
        <button
          className="btn-modal-close"
          onClick={() => setGoogleModal(false)}
        >
          x
        </button>
        <div className="modal-header">Header</div>
        <GoogleButton onClick={handleGoogleSignIn} />
        <div className="modal-body">Body</div>
        <div className="modal-footer">Footer</div>
      </div>
    </div>
  );
}

export default GoogleModal;

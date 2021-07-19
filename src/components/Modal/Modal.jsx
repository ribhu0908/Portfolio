import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const Modal = ({ closeModal }) => {

    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()}
                className="modal-container">
                <div className="upper-section">
                    <h1>Huge Announcement</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h1>DSA Master Class is Live!</h1>
                    <p>Do you wish to learn DSA from basics to advanced?</p>
                    <p>I am teaching DSA every Tuesday,Thurday,Saturday at 8pm! Do check that out today!</p>
                    <p>I am making the course in such a way, that even an average student can understand and crack
                        great oppurtunities!</p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="https://www.youtube.com/channel/UCQmlyuni9n40AjTnFnlvGBQ" target="_blank" rel="noreferrer" className="modal-btn btn-green">
                        Start Tutorial
                    </a>

                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
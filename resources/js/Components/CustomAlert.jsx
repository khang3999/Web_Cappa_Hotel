import React from 'react';
import '../../css/alert.css';

function CustomAlert(props) {
  return (
    <div className="popup-overlay">
      <h1>Are you sure?</h1>
      <p>You want to delete this file?</p>
      <button onClick={props.onClose}>No</button>
      <button
        onClick={() => {
          alert('hi');
          props.onClose();
        }}
      >
        Yes, Delete it!
      </button>
    </div>
  );
}

export default CustomUi;

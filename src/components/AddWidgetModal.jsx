import React, { useState, useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import "./styles/AddWidgetModal.css";

function AddWidgetModal({ dashboardId, onClose }) {
  const { addWidget } = useContext(WidgetContext);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (name.trim() && text.trim()) {
      addWidget(dashboardId, { name, text });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="modal-actions">
          <button className="confirm" onClick={handleAdd}>
            Add
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetModal;

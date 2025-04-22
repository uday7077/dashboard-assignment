// src/components/AddWidgetButton.jsx

import React from "react";
import "./styles/AddWidgetButton.css";

function AddWidgetButton({ onClick }) {
  return (
    <button className="top-add-widget-btn" onClick={onClick}>
      + Add Widget with Category
    </button>
  );
}

export default AddWidgetButton;

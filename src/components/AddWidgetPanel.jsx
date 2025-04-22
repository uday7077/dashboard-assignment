import React, { useState, useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import "./styles/AddWidgetPanel.css";

const categories = ["CSPM", "CWPP", "Image", "Ticket"];
const widgetOptions = [
  { label: "Cloud Accounts", key: "cloudAccounts" },
  { label: "Cloud Account Risk Assessment", key: "riskAssessment" },
];

function AddWidgetPanel({ onClose }) {
  const { addDashboard } = useContext(WidgetContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (key) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConfirm = () => {
    const selectedWidgets = widgetOptions
      .filter((opt) => checkboxes[opt.key])
      .map((opt) => ({
        name: opt.label,
        text: `${opt.label} content`,
      }));
    if (selectedCategory) {
      addDashboard(selectedCategory, selectedWidgets);
    }
    onClose();
  };

  return (
    <div className="widget-panel">
      <h3>Personalize your dashboard</h3>

      <div className="button-group">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="checkbox-group">
        {widgetOptions.map((opt) => (
          <label key={opt.key}>
            <input
              type="checkbox"
              checked={!!checkboxes[opt.key]}
              onChange={() => handleCheckboxChange(opt.key)}
            />
            {opt.label}
          </label>
        ))}
      </div>

      <div className="panel-actions">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddWidgetPanel;

import React, { useState, useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import "./styles/AddDashboardForm.css";

function AddDashboardForm() {
  const [name, setName] = useState("");
  const { addDashboard } = useContext(WidgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addDashboard(name, []);
      setName("");
    }
  };

  return (
    <form className="add-dashboard-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter dashboard name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Dashboard</button>
    </form>
  );
}

export default AddDashboardForm;

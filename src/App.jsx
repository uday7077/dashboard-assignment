// src/App.jsx

import React, { useState } from "react";
import AddWidgetButton from "./components/AddWidgetButton";
import AddWidgetPanel from "./components/AddWidgetPanel";
import AddDashboardForm from "./components/AddDashboardForm";
import DashboardList from "./components/DashboardList";
import "./App.css";

function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="app-container">
      <h1 className="app-title">CNAAP Dashboard</h1>

      {/* Add Widget Button */}
      <AddWidgetButton onClick={() => setShowPanel(true)} />

      {/* Category-based widget selection panel */}
      {showPanel && <AddWidgetPanel onClose={() => setShowPanel(false)} />}

      {/* Manual Dashboard Creation Form */}
      <AddDashboardForm />

      {/* Render All Dashboards */}
      <DashboardList />
    </div>
  );
}

export default App;

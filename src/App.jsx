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

      
      <AddWidgetButton onClick={() => setShowPanel(true)} />

      
      {showPanel && <AddWidgetPanel onClose={() => setShowPanel(false)} />}

      
      <AddDashboardForm />

      
      <DashboardList />
    </div>
  );
}

export default App;

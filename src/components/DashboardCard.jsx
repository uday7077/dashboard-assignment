import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";
import "./styles/DashboardCard.css";

function DashboardCard({ dashboard }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard-card">
      <h2>{dashboard.name}</h2>

      <div className="widgets">
        {/* All existing widgets */}
        {dashboard.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} dashboardId={dashboard.id} />
        ))}

        {/* ➕ Add Widget Card */}
        <div className="add-widget-card" onClick={() => setShowModal(true)}>
          <div className="plus">+</div>
          <div>Add Widget</div>
        </div>
      </div>

      {/* Modal for adding widget */}
      {showModal && (
        <AddWidgetModal
          dashboardId={dashboard.id}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default DashboardCard;

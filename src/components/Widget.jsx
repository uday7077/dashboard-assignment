import React, { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import "./styles/Widget.css";

function Widget({ widget, dashboardId }) {
  const { removeWidget } = useContext(WidgetContext);

  const handleRemove = () => {
    removeWidget(dashboardId, widget.id);
  };

  return (
    <div className="widget">
      <button className="widget-remove" onClick={handleRemove}>
        ×
      </button>
      <div className="widget-title">{widget.name}</div>
      <div className="widget-text">{widget.text}</div>
    </div>
  );
}

export default Widget;

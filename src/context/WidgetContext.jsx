import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const WidgetContext = createContext();

export function WidgetProvider({ children }) {
  const [dashboards, setDashboards] = useState([]);

  const addDashboard = (name, widgets = []) => {
    const newDashboard = {
      id: uuidv4(),
      name,
      widgets: widgets.map((w) => ({ ...w, id: uuidv4() })),
    };
    setDashboards((prev) => [...prev, newDashboard]);
  };

  const removeWidget = (dashboardId, widgetId) => {
    setDashboards((prev) =>
      prev.map((d) =>
        d.id === dashboardId
          ? {
              ...d,
              widgets: d.widgets.filter((w) => w.id !== widgetId),
            }
          : d
      )
    );
  };
  const addWidget = (dashboardId, widget) => {
    setDashboards((prev) =>
      prev.map((d) =>
        d.id === dashboardId
          ? { ...d, widgets: [...d.widgets, { ...widget, id: uuidv4() }] }
          : d
      )
    );
  };

  return (
    <WidgetContext.Provider
      value={{ dashboards, addDashboard, removeWidget, addWidget }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

export const useWidgets = () => useContext(WidgetContext);

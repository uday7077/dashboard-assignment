import React, { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import DashboardCard from "./DashboardCard";
import "./styles/DashboardList.css";

function DashboardList() {
  const { dashboards } = useContext(WidgetContext);
  return (
    <div className="dashboard-list">
      {dashboards.map((d) => (
        <DashboardCard key={d.id} dashboard={d} />
      ))}
    </div>
  );
}

export default DashboardList;

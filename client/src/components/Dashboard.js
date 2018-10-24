import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/surveyList";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

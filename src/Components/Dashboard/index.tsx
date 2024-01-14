import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="c2c-dashboard">
            <Header />
            <Outlet />
        </div>
    )
}

export default Dashboard;
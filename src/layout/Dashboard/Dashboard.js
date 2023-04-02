import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Dashboard = () => {
    return (
        <div className='dashboardMain  gap-3 '>
            <Sidebar />
            <div className='outlet col-span-10 w-full bg-gray-100 rounded-lg'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
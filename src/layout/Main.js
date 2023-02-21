import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>

            <div className='pb-5 mb-5 outlate'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;

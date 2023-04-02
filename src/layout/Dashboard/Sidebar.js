import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className=''>
                <li>Admin Dashboard</li>
                <hr />

                <li>
                    <Link to='manageHome'> Manage Home </Link>
                </li>

                <li>
                    <Link to='description'> Description </Link>
                </li>
                <li>
                    <Link to='admins'> ADMINS </Link>
                </li>
                <li>
                    <Link to='users'> USERS </Link>
                </li>

                <li className='mt-auto'>
                    <Link to='/'> Back to Home </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/Main/About";
import FindReservations from "../pages/Main/FindReservations";
import Gol from "../pages/Main/Gol";
import Home from "../pages/Main/Home";
import Support from "../pages/Main/Support";
import Dashboard from "../layout/Dashboard/Dashboard";
import ManageHome from "../pages/Dashboard/ManageHome";
import Description from "../pages/Dashboard/Description";
import Admins from "../pages/Dashboard/Admins";
import Users from "../pages/Dashboard/Users";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PrivateRoute from "../pages/Authentication/PrivateRoute";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "findReservations",
                element: <FindReservations />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "gol",
                element:
                    <PrivateRoute>
                        <Gol />,
                    </PrivateRoute>
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ]
    },
    {
        path: "dashboard",
        element:
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ,
        children: [
            {
                path: "/dashboard",
                element: <ManageHome />,
            },
            {
                path: "manageHome",
                element: <ManageHome />,
            },
            {
                path: "description",
                element: <Description />,
            },
            {
                path: "admins",
                element: <Admins />,
            },
            {
                path: "users",
                element: <Users />,
            },
        ]
    }
])
export default routes;

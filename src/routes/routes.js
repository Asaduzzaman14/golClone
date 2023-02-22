import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/Main/About";
import FindReservations from "../pages/Main/FindReservations";
import Gol from "../pages/Main/Gol";
import Home from "../pages/Main/Home";

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
                path: "about",
                element: <About />,
            },
            {
                path: "gol",
                element: <Gol />,
            },
        ]
    }
])
export default routes;

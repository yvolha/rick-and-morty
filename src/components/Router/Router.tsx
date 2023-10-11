import { Navigate, createBrowserRouter } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import AllPage from "../../pages/AllPage/AllPage";
import RandomPage from "../../pages/RandomPage/RandomPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import Page404 from "../../pages/Page404/Page404";
import { Root } from "../../App";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />, 
            },
            {
                path: "/all",
                element: <AllPage />,
            },
            {
                path: "/random",
                element: <RandomPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/404",
                element: <Page404 />,
            },
            {
                path: "*",
                element: <Navigate to="/404" />,
            }
        ]
    }
]);

export default appRouter;

import { Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import appRouter from "./components/Router/Router";
import Header from "./components/Header/Header";

export function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;

import { Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import appRouter from "./components/Router/Router";

export function Root() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;

import { Outlet, RouterProvider } from "react-router-dom";

import "./App.css";
import appRouter from "./components/Router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

export function Root() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllPage from "./pages/AllPage/AllPage";
import RandomPage from "./pages/RandomPage/RandomPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Page404 from "./pages/Page404/Page404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all" element={<AllPage />} />
                <Route path="/random" element={<RandomPage />} />
                <Route path="/about"  element={<AboutPage />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Navigate to="/404" />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

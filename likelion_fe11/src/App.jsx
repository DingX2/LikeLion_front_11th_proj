import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

export default function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </>
    );
}

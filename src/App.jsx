import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/posts" element={<PostPage></PostPage>}></Route>
            </Routes>
        </>
    );
}

export default App;

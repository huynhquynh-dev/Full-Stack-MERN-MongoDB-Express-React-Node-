import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./views/Auth";
import Landing from "./components/layout/Landing";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Auth authRoute="login" />} />
                <Route
                    path="/register"
                    element={<Auth authRoute="register" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

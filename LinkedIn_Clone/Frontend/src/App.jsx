import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    let { userData, loading } = useContext(UserDataContext);

    if (loading) return <p className="text-center p-10">Loading...</p>;

    return (
        <Routes>
            <Route
                path="/"
                element={userData ? <Home /> : <Navigate to="/login" />}
            />
            <Route
                path="/signup"
                element={!userData ? <SignUp /> : <Navigate to="/" />}
            />
            <Route
                path="/login"
                element={!userData ? <Login /> : <Navigate to="/" />}
            />
        </Routes>
    );
}

export default App;

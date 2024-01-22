import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, NotFound, User } from "./pages";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;

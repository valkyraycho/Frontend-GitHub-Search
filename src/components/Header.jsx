import React from "react";
import "../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../app/themeSlice";
// import { useThemeContext } from "../context";

const Header = () => {
    // const { toggleTheme } = useThemeContext();
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const handleThemeChange = () => {
        dispatch(toggleTheme());
    };
    return (
        <section className="header-container">
            <h2 className="title">GitSearch</h2>
            <button onClick={handleThemeChange} className="switch-theme">
                🌗
            </button>
        </section>
    );
};

export default Header;

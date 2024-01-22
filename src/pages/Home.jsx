// eslint-disable-next-line no-unused-vars
import React from "react";
import { SearchBar } from "../components";
import "../styles/home.css";

const Home = () => {
    return (
        <div>
            <div className="home-content">
                <div>
                    <h4 className="home-title">Search GitHub User</h4>
                </div>
                <SearchBar />
            </div>
        </div>
    );
};

export default Home;

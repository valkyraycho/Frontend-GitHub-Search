import React from "react";
import "../styles/user.css";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="user-not-found">
            <RxCrossCircled size={30} />
            <h3 className="user-not-found-title">User not found. Try again.</h3>
            <Link className="user-not-found-navlink" to="/">
                <MdOutlineArrowBackIosNew size={30} />
                Home
            </Link>
        </div>
    );
};

export default NotFound;

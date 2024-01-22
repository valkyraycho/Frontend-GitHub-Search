import React, { useRef, useTransition } from "react";
import "../styles/searchBar.css";
import { RiSearch2Fill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../app/userSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleUserSearch = () => {
        const userId = inputRef.current.value;
        navigate(`/user/${userId}`);

        startTransition(() => {
            dispatch(fetchUserById(userId));
        });
    };

    return (
        <div className="searchbar-container">
            <input ref={inputRef} type="text" className="search-input" />
            <RiSearch2Fill
                onClick={handleUserSearch}
                size={25}
                className="search-icon"
            />
        </div>
    );
};

export default SearchBar;

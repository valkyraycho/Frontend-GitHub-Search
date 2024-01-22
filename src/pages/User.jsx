import React from "react";
import { useUserContext } from "../context";
import "../styles/user.css";
import { NotFound, UserProfile } from "../components";
import { useSelector } from "react-redux";

const User = () => {
    const { user, status } = useSelector((state) => state.user);
    let content;
    if (status === "succeeded")
        content = (
            <UserProfile
                avatar_url={user.avatar_url}
                followers={user.followers}
                html_url={user.html_url}
                name={user.name || user.login}
                public_repos={user.public_repos}
                key={user.id}
            />
        );
    else if (status === "loading") content = <div>Loading...</div>;
    else content = <NotFound />;

    return <section>{content}</section>;
};

export default User;

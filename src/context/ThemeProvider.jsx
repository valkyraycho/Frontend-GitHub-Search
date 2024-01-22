import React, {
    createContext,
    useContext,
    useLayoutEffect,
    useState,
} from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    useLayoutEffect(() => {
        document.body.className = mode === "light" ? "light-mode" : "dark-mode";
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

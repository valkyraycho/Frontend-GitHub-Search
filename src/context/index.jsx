import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { UserContext } from "./UserProvider";

const useThemeContext = () => useContext(ThemeContext);
const useUserContext = () => useContext(UserContext);

export { useThemeContext, useUserContext };

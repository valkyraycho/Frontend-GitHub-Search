import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light" };

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            document.body.className =
                state.theme === "light" ? "dark-mode" : "light-mode";
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const selectTheme = (state) => state.theme;

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

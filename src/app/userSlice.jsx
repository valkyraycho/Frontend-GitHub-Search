import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const initialState = {
    user: null,
    status: "idle",
};

export const fetchUserById = createAsyncThunk("fetchUser", async (userId) => {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUserById.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = "failed";
                state.user = null;
            });
    },
});

export default userSlice.reducer;

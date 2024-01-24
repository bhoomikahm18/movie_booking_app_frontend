
import { createSlice, configureStore } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            localStorage.removeItem("userID")
            state.isLoggedIn = false
        },
    }
})

const adminSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            localStorage.removeItem("AdminID")
            localStorage.removeItem("Token")
            state.isLoggedIn = false
        },
    }
})

export const userActions = userSlice.actions;
export const adminActions = adminSlice.actions;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        admin: adminSlice.reducer
    }
})
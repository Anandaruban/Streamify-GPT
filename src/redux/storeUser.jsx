import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const storeUser = configureStore({
  reducer: {
    user: userReducer
  }
})

export default storeUser;
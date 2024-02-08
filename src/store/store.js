import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./slices/list-slice";

const store = configureStore({
  reducer: {
    [listSlice.name]: listSlice.reducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    age: 0,
  },
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setAge: (state, action) => {
      return { ...state, age: action.payload };
    },
  },
});

export const { setAge, setName } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.age;

export default userSlice.reducer;

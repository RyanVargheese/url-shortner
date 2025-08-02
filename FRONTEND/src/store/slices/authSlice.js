import { createSlice } from '@reduxjs/toolkit';

//declaring initial state is important for state management,every slice has its own state
const initialState = {
  user: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //this is called a reducer function,responsible for actually updating the states
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    //login reducer,accepts input data,while logout reducer does not take any data
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

//the newly created slice then return the action creators with the same name as reducers
export const { login,logout } = authSlice.actions;
export default authSlice.reducer;
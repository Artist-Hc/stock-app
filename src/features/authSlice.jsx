import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",

    initialState: {
        currentUser: null,
        loading :false,
        error: null,
        token: '',
        isAdmin:false,
    },
    reducers:{
        fetchStart: (state) => {
           state.loading = true;
           state.error = false;
        },
        loginSuccess :(state,{payload})=>{
            state.loading = false;
            state.error = false;
            state.currentUser = payload.user?.username;
            state.isAdmin = payload.user?.is_superUser ;
            state.token = payload.key ;

        },
        logoutSuccess:(state)=>{
            state.loading = false;
            state.error = false;
            state.token = null;
            state.currentUser = null;


        },
        registerSuccess:(state,{payload})=>{
            state.loading = false;
            state.error = false;
            state.currentUser =payload?.username;
            state.token =payload?.token

        },
        fetchFail: (state)=>{
            state.error =true;
            state.loading =false;
        }
    }
})
export const {
    fetchStart,
    loginSuccess,
    registerSuccess,
    logoutSuccess,
    fetchFail,
  } = authSlice.actions;
  export default authSlice.reducer;
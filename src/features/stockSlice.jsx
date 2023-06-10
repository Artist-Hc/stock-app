import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
     brands:[],
     sales:[],
     puchases:[],
     firms: [],
     products: [],
     categories:[],
     loading: false,
     error: false,
    },
    reducers:{
            fetchstart : (state)=>{
                state.loading = true;
                state.error = false ;
            },
            getsuccess : (state, {payload: {data,url}})=>{
                state.loading = false;
                state[url] = data;
            },
            fetchfail: (state)=> {
                state.loading =false;
                state.error =false;
                
            },
    },

});


export const {fetchstart ,getsuccess, fetchfail} =  stockSlice.actions;

export default stockSlice.reducer ;


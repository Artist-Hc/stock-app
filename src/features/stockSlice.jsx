import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
     brands:[],
     sales:[],
     purchases:[],
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
            getProCatBrandSuccess: (state, {payload})=>{
                state.loading =false;
                state.products =payload[0]
                state.categories =payload[1]
                state.brands =payload[2]

            },
    },


});


export const {fetchstart ,getsuccess, fetchfail,getProCatBrandSuccess} =  stockSlice.actions;

export default stockSlice.reducer ;


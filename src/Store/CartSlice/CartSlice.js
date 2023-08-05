import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            const product = action?.payload;
            state.push(product)

        },
        remove(state,action){
            const product = action?.payload;

            return state.filter((item) => item?.uniqId !== product?.uniqId)


        },
        clearCart(state,action){
            return []
        }
    }
    
})


export const {add,remove,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    restaurantes: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload
        },
        setRestaurants:{
            reducer: (state, action) => {
                state.restaurantes = action.payload
            }
        }
    }
});


export const {setUser, user, addUser, setRestaurants} = authSlice.actions;
export default  authSlice.reducer;
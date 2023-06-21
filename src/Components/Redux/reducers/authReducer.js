import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    restaurantes: [],
    selectedRestaurantId: null,
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
        },
        setSelectedRestaurantId: (state, action) => {
            state.selectedRestaurantId = action.payload;
        }
    }
});


export const {setUser, user, addUser, setRestaurants, setSelectedRestaurantId} = authSlice.actions;
export default  authSlice.reducer;
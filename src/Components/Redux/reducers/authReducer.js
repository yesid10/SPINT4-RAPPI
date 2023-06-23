import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    restaurantes: [],
    selectedRestaurantId: null,
    platoSeleccionado: [],
    cantidad: null,
    error: false,
    filter: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload
        },
        setRestaurants: {
            reducer: (state, action) => {
                state.restaurantes = action.payload
            }
        },
        setSelectedRestaurantId: (state, action) => {
            state.selectedRestaurantId = action.payload;
        },
        setPlatoSeleccionado: (state, action) => {
            state.platoSeleccionado = action.payload
        },
        setCantidad: (state, action) => {
            state.cantidad = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
});


export const {
    setUser,
    user,
    addUser,
    setRestaurants,
    setSelectedRestaurantId,
    setPlatoSeleccionado,
    setCantidad,
    setError,
    setFilter
} = authSlice.actions;
export default authSlice.reducer;
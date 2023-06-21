import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../Firebase/firebaseConfigure";
import { setPlatoSeleccionado, setRestaurants, setSelectedRestaurantId } from "../reducers/authReducer";

const coleccionRestaurants = collection(firestore, 'restaurants')
export const listRestaurants = () => {
    return async (dispatch) => {
        try {
            let tempArr = [];
            const restaurants = await getDocs(coleccionRestaurants);
            restaurants.forEach((restaurant) => {
                tempArr.push({id: restaurant.id, ...restaurant.data()})
            });
            dispatch(setRestaurants(tempArr));
        } catch (error) {
            console.log('error',error);
        }
    }
}

export const navigateRestaurantDetail = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setSelectedRestaurantId(id));
        } catch (error) {
            console.log('error',error);
        }
    }
}
export const navigateDetallePlato = (id) => {
    return async (dispatch) => {
        try {
            dispatch(setPlatoSeleccionado(id));
        } catch (error) {
            console.log('error',error);
        }
    }
}
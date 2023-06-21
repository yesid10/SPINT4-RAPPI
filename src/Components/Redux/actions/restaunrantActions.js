import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../Firebase/firebaseConfigure";
import { setRestaurants } from "../reducers/authReducer";

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
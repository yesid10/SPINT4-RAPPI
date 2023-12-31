import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../Firebase/firebaseConfigure";
import { setCantidad, setPlatoSeleccionado, setRestaurants, setSelectedRestaurantId } from "../reducers/authReducer";

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

export const cantidadPlato = (cantidad) =>{
    return async (dispatch) => {
        try {
            dispatch(setCantidad(cantidad));
        } catch (error) {
            console.log('error cantidad', error);
        }
    }   
}
export const filterRestaurant = (name) => {
    return async (dispatch) => {
        
        const q = query(coleccionRestaurants, where("type", "==",name));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        const tempArr = [];
        querySnapshot.forEach((doc) => {     
            tempArr.push({ id: doc.id, ...doc.data() })
        });
        try {
            dispatch(setRestaurants(tempArr));
            
        } catch (error) {
            console.log("error", error);
            
        }
    };
}
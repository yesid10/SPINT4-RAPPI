import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RestaurantPage = () => {
    const [restaurantsLoaded, setRestaurantsLoaded] = useState(false);
    const restaurantes = useSelector((store) => store.authReducer.selectedRestaurantId);
    const dispatch = useDispatch();
  
    console.log(restaurantes)
    // const getRestaurants = () => {
    //     dispatch(listRestaurants());
    // };

    // useEffect(() => {
    //     if (!restaurantsLoaded) {
    //         getRestaurants();
    //         setRestaurantsLoaded(true);
    //     }
    //     setListRestaurant(restaurantes);
    // }, [dispatch, restaurantes, restaurantsLoaded]);
  return (
    <div>RestaurantPage</div>
  )
}

export default RestaurantPage
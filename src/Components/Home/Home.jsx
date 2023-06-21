import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { listRestaurants } from "../Redux/actions/restaunrantActions";
import { Box, Rating, Typography } from "@mui/material";
import { Div, StylesDivInfo } from "./StylesHome";

const Home = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState(3);
    const restaurantes = useSelector((store) => store.authReducer.restaurantes);
    const dispatch = useDispatch();

    const getRestaurants = () => {
        dispatch(listRestaurants());
    }

    useEffect(() => {
        if (search) {
            setListRestaurant(restaurantes)
        } else {
            getRestaurants();
            setListRestaurant(restaurantes)
        }
    }, [dispatch, restaurantes, search])

    return (
        <Div>
            {
                listRestaurant?.map((res, index) =>
                    <StylesDivInfo  key={index}>
                        <figure>
                            <img src={res.image} alt={res.name} />
                        </figure>
                        <div>
                            <p>{res.name}</p>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            <p>{res.time}</p>
                            <p>{res.price}</p>

                        </div>
                    </StylesDivInfo>
                )
            }
        </Div>

    )
}

export default Home
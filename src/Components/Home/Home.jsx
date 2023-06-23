import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurant, listRestaurants, navigateRestaurantDetail } from "../Redux/actions/restaunrantActions";
import { Rating } from "@mui/material";
import { Div, StylesDivInfo } from "./StylesHome";
import { MdLocationOn, MdKeyboardArrowDown } from 'react-icons/md';

import { Carousel } from 'antd';
import { Link, } from "react-router-dom";
import BannerMenu from "../Banner/BannerMenu";



const Home = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [value, setValue] = useState(3);
    const [restaurantsLoaded, setRestaurantsLoaded] = useState(false);
    const restaurantes = useSelector((store) => store.authReducer.restaurantes);
    const [btnFilter, setBtnFilter] = useState('all');
    const dispatch = useDispatch();

    const getRestaurants = () => {
        dispatch(listRestaurants());
        setBtnFilter('all')
    };

    useEffect(() => {
        if (!restaurantsLoaded) {
            getRestaurants();
            setRestaurantsLoaded(true);
        }
        setListRestaurant(restaurantes);
    }, [dispatch, restaurantes, restaurantsLoaded]);

    const handleClickRestaurant = (res) => {
        dispatch(navigateRestaurantDetail(res));
        console.log(res);
    }

    const handleFilter = (name) => {
        dispatch(filterRestaurant(name));
        setListRestaurant(restaurantes)
        setBtnFilter(name)
    }

    
   

   

    return (
        <Div style={{marginTop:'25rem'}}>
            <div style={{
                margin:'5% 10%',
                display:'flex',
                alignItems:'center',
                cursor:'pointer'
            }}>
                <MdLocationOn style={{ color: '#ffe031', fontSize: '3rem' }} />
                <div style={{margin:'0 .7rem'}}>
                    <p style={{margin:0, color: '#ffe031'}}>DELIVER TO</p>
                    <div style={{display:'flex', alignItems:'center', gap:'.6rem'}}>
                        <p style={{margin:0, fontSize:'1.4rem'}}>882 Well St, New York</p>
                        <MdKeyboardArrowDown style={{fontSize:'1.5rem'}}/>
                    </div>
                </div>

            </div>
            <Carousel className="carouselAutoplay" autoplay>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/a551/cda6/6f5901ae985be54c871ff39edfe14c77?Expires=1688342400&Signature=H23H8lDBzK0c1ccXt4-eWbD~Aa7BarxRaq6zIW9jdS5hjSfkjn1GCpPLR-8msXleFKanACe04DfrraPMgciKUNL8~ZPH0oE-HF0CM2~z5MQQKwCKm4t4fqGhrekRrEbwjFZZkEXPtU-1EFfzRYSfwIjREWIysH-kOToXFHCdj-FpyVVtB1cx1R3BsqsubWFvBrZm3OslwimYohHvLvmmBYb3haqFHC-QimH0dZTtADRQ00dLtrh8PYC-O-AAR88HCW8sIs5AgSJeX0JBG~CsXktBQP7e2q3ft90f3Gh68KUJHNBopAEPV474ZnfpeeUs2JBTw2ZBp4diHr1FAr08Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div>
                    <img className="imgGirar" src="https://s3-alpha-sig.figma.com/img/fd7a/842a/5953b2eb7e0d4a5abc2ce94ba5b1c2d6?Expires=1688342400&Signature=C8eQeMDla59GSbzO95d5m-4emuL-4bVhRWBBBFzz9etvNiwO6MT4SX~ElYiGSR0~NCWvV732LTCqv9~yvXws2zT6X0HTE3tSNYElRqEkDZheho-s-SgsEwmESqwCDzWJrqkXrsK8q~XwMK98xovx~icdsaMFjtpvr48iD6-UFsGFfIytuXY9wgpRsR-3wZg9hYW9~kW0~vhsXdCr12arANULOcZvAfQbeh2QPmd2Fz54GgoRaOznjf84zrCVAP4BQPZwRo1D2uQEUvVHLQfJ-H27BLhbMgd24yhFTz4tz8nUNUaD0KqiApVnBpCOtOL-rat9z4vGL7mKpwXpL2fwgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
            </Carousel>
            <p className="pResta">Restaurants and cafes</p>
            <div className="carouselNoAutoplay">
                <div onClick={() => getRestaurants('all')} style={{background: btnFilter === 'all'? '#FFE031' : '' }}>
                    <p>All</p>
                </div>
                <div onClick={() => handleFilter('fastFoot')} style={{background: btnFilter === 'fastFoot'? '#FFE031' : ''}}>
                    <img src="https://img.icons8.com/?size=512&id=zcIXxtVQHg34&format=png" alt="" />
                    <p>Fast food</p>
                </div>
                <div onClick={() => handleFilter('pizza')} style={{background: btnFilter==='pizza'? '#FFE031' : ''}}>
                    <img src="https://img.icons8.com/?size=512&id=oTyopyeAHiFU&format=png" alt="" />
                    <p>Pizza</p>
                </div>
            </div>
            {listRestaurant?.map((res, index) => (
                <Link
                    to={`/restaurante/${res.id}`}
                    key={index}>
                    <StylesDivInfo onClick={() => handleClickRestaurant(res)} >
                        <figure>
                            <img src={res.image} alt={res.name} />
                        </figure>
                        <div>
                            <p className="name">{res.name}</p>
                            <Rating
                                style={{ fontSize: '1.2rem', color: '#FFE031', opacity: .5, marginBottom: '1rem' }}
                                name={`rating-${index}`}
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <p className="time">{res.time}</p>
                            <p className="price">{res.price}</p>
                        </div>
                    </StylesDivInfo>
                </Link>

            ))}
            <BannerMenu />

        </Div>
    );
}

export default Home;

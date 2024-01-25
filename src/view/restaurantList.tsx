
import RestaurantCard from "./../components/card/restaurantCard";
import {useContext, useEffect, useState} from "react";
import {BackdropContext} from "../context/orderRouteContext.ts";
import Cookies from "js-cookie";
import axios from "axios";
import {Restaurant} from "./restaurant/signuprestaurant.tsx";
import {Menu} from "./menuList.tsx";
import Empty from "../components/dialog/empty.tsx";
function RestaurantList() : JSX.Element {
    const {  updateBackdropValue } = useContext(BackdropContext);
    const [data, setData] = useState([])
    const ACCESS_TOKEN = Cookies.get("user");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }

    useEffect(() => {
        updateBackdropValue(true);
        getAllRestaurant()
    }, []);
    const getAllRestaurant = () => {
        axios.get("http://localhost:8080/api/v1/restaurant/with-menu", {headers: headers})
            .then(r => {
                setData(r.data.data)
                updateBackdropValue(false)
            })
            .catch(e => {
                console.log(e);
                updateBackdropValue(false)
            })
    }
    return (
        <section className={"flex justify-around"}>
            { data.length > 0 ?
            <section className={'flex flex-col gap-5 items-center justify-center my-10'}>

                {
                    data.map((value: {restaurant:Restaurant, menus:Menu[]}) => {
                        return   <RestaurantCard name={value.restaurant.restaurantName} rate={4} address={value.restaurant.address} cards={value.menus}/>
                    })
                }
            </section> : <Empty/>}
        </section>
    );
}
export default RestaurantList;

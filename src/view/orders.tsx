import axios from "axios";
import {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {BackdropContext} from "../context/orderRouteContext.ts";
import OrderCart from "../components/card/ordercart.tsx";
import {useNavigate} from "react-router-dom";

/**
 * author : Sudeera Madushan
 * date : 1/23/2024
 * project : food-delivery-system
 */
const Orders = ():JSX.Element => {
    const { updateBackdropValue } = useContext(BackdropContext);
    const [orders, setOrders] = useState([])
    const ACCESS_TOKEN = Cookies.get("user");
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    useEffect(() => {
        updateBackdropValue(true);
        getAllMyOrders();
    }, []);

    const getAllMyOrders = () => {
        axios.get("http://localhost:8080/api/v1/order/all", {headers: headers})
            .then((r:any) => {
                setOrders(r.data.data);
                console.log(orders)
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            })
    };
    return (
    <section className={"p-20 pt-10 border m-56 mt-1 rounded-xl shadow"}>
        <div>
            <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Orders</h1>
        </div>
        <div className={"mt-5"}>
            {
                orders.map((v) => {
                    return <OrderCart
                        foodName={v.cart[0].menu.foodName}
                                      address={v.address}
                                      price={v.price}
                                      Distance={v.distance}
                                      ordered={v.distance}
                                      states={v.states}
                                      onClick={() => navigate('/route', {state:{order:v}})}
                    />;
                })
            }
        </div>
    </section>
    )
}
export default Orders;

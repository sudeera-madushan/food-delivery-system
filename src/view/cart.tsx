import {useContext, useEffect, useState} from "react";
import {BackdropContext, CartContext} from "../context/orderRouteContext.ts";
import CartItem from "../components/card/cartitem.tsx";
import CustomizedDialogs from "./../../src/components/dialog/dialog.tsx";
import axios from "axios";
import Cookies from "js-cookie";
function Cart():JSX.Element {
    const {cart} = useContext(CartContext);
    const { updateBackdropValue } = useContext(BackdropContext);
    const [openMap, setOpenMap] = useState(false)
    const [myLocation, setMyLocation] = useState("")
    const ACCESS_TOKEN = Cookies.get("user");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }

    const getUserLocation = () => {
        axios.get("http://localhost:8080/api/v1/user/location", {headers: headers})
            .then((r:any) => {
                setMyLocation(r.data.data)
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            })
    };

    // const checkDistance = ()

    useEffect(() => {
        updateBackdropValue(true)
        getUserLocation()
    }, []);

    const getLocation =async (l:any , a:any, z:any) => {
        if (cart.length > 0) {
            axios.get("http://localhost:8080/api/v1/user/distance?latitude="
                + l.latitude + "&longitude=" + l.longitude + "&restaurant=" + cart[0].restaurant,
                {headers: headers})
                .then((r: any) => {
                    console.log(r.data.data)
                    setMyLocation(r.data.data)
                    updateBackdropValue(false)
                })
                .catch((e: any) => {
                    console.log(e);
                    updateBackdropValue(false)
                })
        }
        updateBackdropValue(false)
    }

    return (
        <section className={'flex justify-around'}>
            <div>
                {
                    cart.map((r,i) => {
                        return <CartItem img={r.menu.image} foodName={r.menu.foodName} qty={r.qty} price={r.menu.price}/>
                    })
                }
            </div>
            <div className={'w-[50vw] shadow-xl m-2'}>
                <div className={'flex justify-between'}>
                    <h1 className={'m-5 mb-1 font-agbalumo text-xl'}>Address :</h1>
                    <CustomizedDialogs open={openMap} getLocation={getLocation}/>
                </div>
                <h1 className={'m-5 mt-0 font-agbalumo text-2xl p-2 rounded-xl shadow'}>{myLocation}</h1>

                <div className={'p-10 px-20'}>
                    <div className={'flex justify-between pt-10 py-1 border-b'}>
                        <h1 className={''}>Total </h1>
                        <h1 className={'font-bold'}>1000.00</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b'}>
                        <h1 className={''}>Delivery Cost  </h1>
                        <h1 className={'font-bold'}>257.00</h1>
                    </div>
                    <div className={'flex justify-between py-1  border-b-2'}>
                        <h1 className={''}>Tax Cost  </h1>
                        <h1 className={'font-bold'}>50.00</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b-2'}>
                        <h1 className={''}>To Pay</h1>
                        <h1 className={'font-bold'}>1357.00</h1>
                    </div>
                    <div className={'flex justify-end'}>
                        <button className={'bg-[var(--primary-color)] p-2 m-2 rounded-xl text-white font-bold hover:bg-red-700'}>Order Now</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Cart;

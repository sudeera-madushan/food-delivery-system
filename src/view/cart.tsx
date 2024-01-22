import {useContext, useEffect, useState} from "react";
import {BackdropContext, CartContext} from "../context/orderRouteContext.ts";
import CartItem from "../components/card/cartitem.tsx";
import CustomizedDialogs from "./../../src/components/dialog/dialog.tsx";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
function Cart():JSX.Element {
    const {cart} = useContext(CartContext);
    const { updateBackdropValue } = useContext(BackdropContext);
    const [openMap, setOpenMap] = useState(false)
    const [myAddress, setMyAddress] = useState("")
    const [myLocation, setMyLocation] =
        useState<{latitude:number , longitude:number} | undefined>()
    const [totalCost, setTotalCost] = useState(0)
    const [deliveryCost, setDeliveryCost] = useState(0)
    const [deliveryCostPer, setDeliveryCostPer] = useState(20)
    const [taxCost, setTaxCost] = useState(49)
    const [toPayCost, setToPayCost] = useState(0)
    const [distance, setDistance] = useState(0)
    const ACCESS_TOKEN = Cookies.get("user");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }

    const getUserLocation = () => {
        axios.get("http://localhost:8080/api/v1/user/location", {headers: headers})
            .then((r:any) => {
                setMyAddress(r.data.data)
                updateBackdropValue(false)
                setBalance()
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

    const setBalance = () => {
        let bal=0;
        cart.map((v:any) => {
            bal += (v.menu.price * v.qty)
        })
        setTotalCost(bal)
    }

    const calcDeliveryCost = () => {
        if (distance > 1) {
            setDeliveryCost((deliveryCostPer * (distance-1)) + 100)
        }else {
            setDeliveryCost(100)
        }

        setToPayCost(totalCost + deliveryCost + taxCost);

        updateBackdropValue(false)
    };
    const getLocation =async (l:any , a:any, z:any) => {
        updateBackdropValue(true)
        if (cart.length > 0) {
            axios.get("http://localhost:8080/api/v1/user/distance?latitude="
                + l.latitude + "&longitude=" + l.longitude + "&restaurant=" + cart[0].menu.restaurant,
                {headers: headers})
                .then((r: any) => {
                    if (parseFloat(r.data.data) <= 20){
                        setDistance(r.data.data)
                        setMyAddress(a);
                        setMyLocation(l);

                        calcDeliveryCost()


                    }else {
                        Swal.fire({
                            icon: "error",
                            title: "Sorry!",
                            text: "The distance from the restaurant is more than the location you selected"
                        });
                    }
                })
                .catch((e: any) => {
                    console.log(e);
                    updateBackdropValue(false)
                })
        }
        updateBackdropValue(false)
    }


    const orderNow = () => {
        let cartData:any = [];
        cart.map((v) => {
            cartData.push({menu:v.menu._id, qty: v.qty, price: v.menu.price})
        })
        let data = {
            restaurant: cart[0].menu.restaurant,
            cart: cartData,
            location: myLocation,
            address: myAddress,
            distance: distance,
            totalCost:totalCost,
            deliveryCost:deliveryCost,
            taxCost: taxCost,
            toPayCost: toPayCost
        }
        axios.post("http://localhost:8080/api/v1/order/save", data,{headers: headers})
            .then((r:any) => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Order Added successfully!"
                });
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
                updateBackdropValue(false)
            })
    }

    return (
        <section className={'flex justify-around'}>
            <div>
                {
                    cart.map((r:any) => {
                        return <CartItem img={r.menu.image} foodName={r.menu.foodName} qty={r.qty} price={r.menu.price}/>
                    })
                }
            </div>
            <div className={'w-[50vw] shadow-xl m-2'}>
                <div className={'flex justify-between'}>
                    <h1 className={'m-5 mb-1 font-agbalumo text-xl'}>Address :</h1>
                    <CustomizedDialogs open={openMap} getLocation={getLocation}/>
                </div>
                <h1 className={'m-5 mt-0 font-agbalumo text-2xl p-2 rounded-xl shadow'}>{myAddress}</h1>

                <div className={'p-10 px-20'}>
                    <div className={'flex justify-between pt-10 py-1 border-b'}>
                        <h1 className={''}>Total </h1>
                        <h1 className={'font-bold'}>{totalCost.toFixed(2)}</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b'}>
                        <h1 className={''}>Delivery Cost  </h1>
                        <h1 className={'font-bold'}>{deliveryCost.toFixed(2)}</h1>
                    </div>
                    <div className={'flex justify-between py-1  border-b-2'}>
                        <h1 className={''}>Tax Cost  </h1>
                        <h1 className={'font-bold'}>{taxCost.toFixed(2)}</h1>
                    </div>
                    <div className={'flex justify-between py-1 border-b-2'}>
                        <h1 className={''}>To Pay</h1>
                        <h1 className={'font-bold'}>{totalCost.toFixed(2)}</h1>
                    </div>
                    <div className={'flex justify-end'}>
                        <button className={'bg-[var(--primary-color)] p-2 m-2 rounded-xl text-white font-bold hover:bg-red-700'} onClick={orderNow}>Order Now</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Cart;

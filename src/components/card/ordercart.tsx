/**
 * author : Sudeera Madushan
 * date : 1/25/2024
 * project : food-delivery-system
 */
import {MouseEventHandler, useContext} from "react";
import axios from "axios";
import {BackdropContext} from "../../context/orderRouteContext.ts";

export enum OrderStates {
    ORDERED = 'ORDERED',
    CONFIRMED = 'CONFIRMED',
    PREPARED = 'PREPARED',
    DELIVER = 'DELIVER',
    COMPLETE = 'COMPLETE',
}

interface Props{
    foodName: string,
    address: string,
    price: number,
    Distance: number,
    states: OrderStates,
    ordered: Date,
    onClick: MouseEventHandler<HTMLDivElement>
}

const OrderCart = (props: Props):JSX.Element => {


    return (
            <div className={"border-b-cyan-600 border  p-3 pl-7 rounded-2xl shadow-xl mb-5 cursor-pointer"} onClick={props.onClick}>
                <div className={"flex justify-between "}>
                    <h1 className={"text-[var(--primary-color)] ms-2 font-concert-one text-xl "}>{props.foodName}</h1>

                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Address :</h1>
                    <h1 className={"text-blue-700 ms-2 font-concert-one"}>{props.address}</h1>
                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Price :</h1>
                    <h1 className={"text-blue-700 ms-2 font-concert-one"}>{props.price}LKR</h1>
                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Distance :</h1>
                    <h1 className={"text-blue-700 ms-2 font-concert-one"}>10KM</h1>
                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Delivery Charge :</h1>
                    <h1 className={"text-blue-700 ms-2 font-concert-one"}>100LKR</h1>

                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Ordered Time :</h1>
                    <h1 className={"text-blue-700 ms-2 font-concert-one"}>
                        {
                            props.ordered && new Date(props.ordered)
                                .toLocaleDateString('en-US') + ', '
                            + new Date(props.ordered)
                                .toLocaleTimeString('en-US', { hour12: false }).slice(0, 5)
                        }
                    </h1>
                </div>
                <h1 className={"bg-green-400 text-center rounded mx-72"}>{props.states}</h1>
            </div>
    )
}
export default OrderCart;

/**
 * author : Sudeera Madushan
 * date : 1/25/2024
 * project : food-delivery-system
 */
import {MouseEventHandler, useContext, useEffect, useState} from "react";
import {IoCheckmarkDoneCircle, IoCloseCircleSharp} from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../../button/button.tsx";
import axios from "axios";
import {BackdropContext} from "../../../context/orderRouteContext.ts";
import Cookies from "js-cookie";

export enum OrderStates {
    ORDERED = 'ORDERED',
    CONFIRMED = 'CONFIRMED',
    PREPARED = 'PREPARED',
    COMPLETE = 'COMPLETE',
    CANCELED = 'CANCELED'
}
interface Props{
    _id?:string,
    foodName: string,
    address: string,
    price: number,
    Distance: number,
    states: OrderStates,
    ordered: Date,
    onClick: MouseEventHandler<HTMLDivElement>,
    conformOrder:Function,
    cookedOrder:Function,
    completeOrder:Function
}
const ResOrderCart = (props: Props):JSX.Element => {
    const [orderedTime, setOrderedTime] = useState<Date>(new Date(props.ordered))
    const [time, setTime] = useState(0)
    const [conformed, setConformed] = useState(false)
    const [mins, setMins] = useState(30)
    const ACCESS_TOKEN = Cookies.get("restaurant");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }

    const calculateTimeDifference = (orderedTime:Date) => {
        const thirtyMinutesEarlier = new Date(orderedTime.getTime() + (30 * 60 * 1000));
        const differenceInMinutes = ( thirtyMinutesEarlier.getTime() - new Date().getTime()) / (60 * 1000);
        return differenceInMinutes;
    };

    useEffect(() => {
        setOrderedTime(new Date(props.ordered))
        if (orderedTime) {
            setTime(calculateTimeDifference(orderedTime));
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevProgress) =>
                prevProgress === 0 ? 0 : prevProgress - (1/600)
            );
        }, 100);

        if (time <= 0 || time > 30) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [time]);



    return (
        <div className={"border-b-cyan-600 border  p-3 pl-7 rounded-2xl shadow-xl mb-5"}>
            <div className={"flex justify-between "}>
                <div></div>
                <h1 className={"text-[var(--primary-color)] ms-2 font-concert-one text-xl "}>Fish Curry and Mixed Rice</h1>
                <div className={"justify-end mr-2"}>
                    {props.states === OrderStates.COMPLETE ? <IoCheckmarkDoneCircle className={"text-5xl text-green-400"}/> :
                    time <= 0 || time > 30 ?
                        <IoCloseCircleSharp className={"text-red-600 text-5xl"}/>
                        : <CircularProgress variant="determinate" value={(time/mins)*100} />}
                </div>
            </div>
            <div className={"flex"}>
                <h1 className={"font-bold font-agbalumo text-gray-600"}>Address :</h1>
                <h1 className={"text-blue-700 ms-2 font-concert-one"}>Fish Curry and Mixed Rice</h1>
            </div>
            <div className={"flex"}>
                <h1 className={"font-bold font-agbalumo text-gray-600"}>Price :</h1>
                <h1 className={"text-blue-700 ms-2 font-concert-one"}>2000LKR</h1>
            </div>
            <div className={"flex"}>
                <h1 className={"font-bold font-agbalumo text-gray-600"}>Distance :</h1>
                <h1 className={"text-blue-700 ms-2 font-concert-one"}>10KM</h1>
            </div>
            <div className={"flex"}>
                <h1 className={"font-bold font-agbalumo text-gray-600"}>Delivery Charge :</h1>
                <h1 className={"text-blue-700 ms-2 font-concert-one"}>100LKR</h1>
                {
                    time > 0 ? <div className={"text-right w-2/3 h-2"}>

                        {
                            props.states === OrderStates.ORDERED ? <><Button name={"Conform"} bgColor={"bg-green-500"} bgColorHover={"bg-green-900"}
                                               onClickEvent={(e) => props.conformOrder(props._id)}/>
                            <Button name={"Cancel"} bgColor={"bg-gray-400"} bgColorHover={"bg-green-900"}/></>

                                : props.states === OrderStates.CONFIRMED ?
                                    <Button name={"Cooked"} bgColor={"bg-blue-500"} bgColorHover={"bg-green-900"}
                                            onClickEvent={(e) => props.cookedOrder(props._id)}/>
                                : props.states === OrderStates.PREPARED ?
                                    <Button name={"Complete"} bgColor={"bg-fuchsia-500"} bgColorHover={"bg-green-900"}
                                            onClickEvent={(e) => props.completeOrder(props._id)}/>
                                : null
                }
                    </div> : null
                }
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
        </div>
    )
}
export default ResOrderCart;

import {IoCloseCircleSharp} from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../components/button/button.tsx";

/**
 * author : Sudeera Madushan
 * date : 1/23/2024
 * project : food-delivery-system
 */
const Orders = ():JSX.Element => {
    return (
    <section className={"p-20 pt-10 border m-56 mt-1 rounded-xl shadow"}>
        <div>
            <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Orders</h1>
        </div>
        <div className={"mt-5"}>
            <div className={"border-b-cyan-600 border  p-3 pl-7 rounded-2xl shadow-xl mb-5"}>
                <div className={"flex justify-between "}>
                    <h1 className={"text-[var(--primary-color)] ms-2 font-concert-one text-xl "}>Fish Curry and Mixed Rice</h1>

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

                </div>
                <div className={"flex"}>
                    <h1 className={"font-bold font-agbalumo text-gray-600"}>Ordered Time :</h1>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Orders;

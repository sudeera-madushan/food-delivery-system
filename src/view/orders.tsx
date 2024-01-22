import Button from "../components/button/button.tsx";
import React, {useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { IoCloseCircleSharp } from "react-icons/io5";

/**
 * author : Sudeera Madushan
 * date : 1/22/2024
 * project : food-delivery-system
 */
const Orders = (() :JSX.Element =>{
    const [orderedTime, setOrderedTime] = useState(new Date)
    const [time, setTime] = useState(0)
    const [mins, setMins] = useState(30)

    const calculateTimeDifference = (orderedTime:Date) => {
        const thirtyMinutesEarlier = new Date(new Date().getTime() - 30 * 60 * 1000);
        const differenceInMinutes = (orderedTime.getTime() - thirtyMinutesEarlier.getTime()) / (60 * 1000);

        return differenceInMinutes;
    };

    useEffect(() => {
        orderedTime.setHours(18)
        orderedTime.setMinutes(10);
        orderedTime.setSeconds(30)
        setTime( calculateTimeDifference(orderedTime));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevProgress) =>
                prevProgress === 0 ? 0 : prevProgress - (1/600)
            );
        }, 100);

        if (time <= 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [time]);

  return (
      <section className={"p-20 pt-10 border m-56 mt-1 rounded-xl shadow"}>
          <div>
              <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Orders</h1>
          </div>
          <div className={"mt-5"}>
              <div className={"border-b-cyan-600 border  p-3 pl-7 rounded-2xl shadow-xl mb-5"}>
                  <div className={"flex justify-between "}>
                    <div></div>
                    <h1 className={"text-[var(--primary-color)] ms-2 font-concert-one text-xl "}>Fish Curry and Mixed Rice</h1>
                    <div className={"justify-end mr-2"}>
                        {time <= 0 ? <IoCloseCircleSharp className={"text-red-600 text-5xl"}/> : <CircularProgress variant="determinate" value={(time/mins)*100} />}
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
                          <Button name={"Conform"} bgColor={"bg-green-500"} bgColorHover={"bg-green-900"}/>
                          <Button name={"Cancel"} bgColor={"bg-gray-400"} bgColorHover={"bg-green-900"}/>
                      </div> : null
                      }
                  </div>
                  <div className={"flex"}>
                      <h1 className={"font-bold font-agbalumo text-gray-600"}>Ordered Time :</h1>
                      <h1 className={"text-blue-700 ms-2 font-concert-one"}>{`${orderedTime.getHours()}:${orderedTime.getMinutes()}`}</h1>
                  </div>
              </div>
              <div className={"border-b-cyan-600 border  p-3 pl-7 rounded-2xl shadow-xl mb-5"}>
                  <div className={"flex justify-between "}>
                    <div></div>
                    <h1 className={"text-[var(--primary-color)] ms-2 font-concert-one text-xl "}>Fish Curry and Mixed Rice</h1>
                    <div className={"justify-end mr-2"}>
                        {time <= 0 ? <IoCloseCircleSharp className={"text-red-600 text-5xl"}/> : <CircularProgress variant="determinate" value={(time/mins)*100} />}
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
                          <Button name={"Conform"} bgColor={"bg-green-500"} bgColorHover={"bg-green-900"}/>
                          <Button name={"Cancel"} bgColor={"bg-gray-400"} bgColorHover={"bg-green-900"}/>
                      </div> : null
                      }
                  </div>
                  <div className={"flex"}>
                      <h1 className={"font-bold font-agbalumo text-gray-600"}>Ordered Time :</h1>
                      <h1 className={"text-blue-700 ms-2 font-concert-one"}>{`${orderedTime.getHours()}:${orderedTime.getMinutes()}`}</h1>
                  </div>
              </div>
          </div>
      </section>
  )
})
export default Orders;

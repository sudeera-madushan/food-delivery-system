import {Progress, Type} from '../components/progress/progress.tsx';
import TimeProgress from "../components/progress/timeProgress.tsx";
import BingMap from "../components/map/directions.tsx";
import ParentContext from "../context/orderRouteContext.ts";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {OrderStates} from "../components/card/ordercart.tsx";
import {Rating} from "@mui/material";

function OrderRoute() : JSX.Element{
    const [parentValue, setParentValue] = useState(1000);
    const navigate = useNavigate()
    const location = useLocation();
    const [restaurantLocation, setRestaurantLocation] = useState<{ latitude: number; longitude: number }>()
    const order = location?.state ?.order;

    const updateParentValue = (newValue:number) => {
        setParentValue(newValue);
      };

      const contextValue = {
          parentValue,
          updateParentValue,
      };

    return (
        <ParentContext.Provider value={contextValue}>
            <h1 className={"text-[var(--secondary-color)] font-agbalumo text-center mt-5 text-2xl"}>{order.address}</h1>
            <div className={"flex justify-center mt-5"}>
                {
                    order.cart.map((v:any) => {
                        return<div className={"shadow rounded-3xl m-2 flex cursor-pointer"} onClick={() =>  navigate('/menu', {state: {menu: v.menu}})}>
                                <img src={v.menu.image} className={"w-12 h-12 rounded-full shadow m-2"} alt=""/>
                                <h1 className={"font-concert-one text-[var(--primary-color)] text-xl mt-4 mr-2"}>{v.menu.foodName}</h1>
                              </div>;
                    })
                }
            </div>
            { order.states === OrderStates.COMPLETE ?
                <div className={"flex mb-[21px]"}>
                    <h1 className={"text-[var(--primary-color)] font-concert-one text-6xl  m-10"}> Happy eating !</h1>
                    <div className={"p-16"}>
                        <Rating name="half-rating" defaultValue={0} precision={0.1} size="large" />
                    </div>
                </div>
                :
                <section className={'flex'}>
                <div className={'flex justify-between w-[50vw] m-10 p-5 border rounded-xl h-[300px]'}>
                        <div>
                        <div className={'flex p-2'}>
                            <Progress state={
                                order.states === OrderStates.ORDERED ? Type.PENDING : Type.DONE} show={true}/>
                            <h1 className={'ml-2'}>Restaurant Confirmation</h1>
                        </div>
                        <div className={'flex p-2'}>
                            <Progress state={
                                order.states === OrderStates.CONFIRMED ? Type.PENDING : Type.DONE
                            } show={order.states != OrderStates.ORDERED}/>
                            <h1 className={'ml-2'}>Preparation and Cooking</h1>
                        </div>
                        <div className={'flex p-2'}>
                            <Progress state={
                                order.states === OrderStates.PREPARED ? Type.PENDING : Type.DONE
                            } show={order.states != OrderStates.CONFIRMED && order.states != OrderStates.ORDERED}/>
                            <h1 className={'ml-2'}>Dispatch for Delivery</h1>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1>Expected time</h1>
                        <TimeProgress time={parentValue} sec={parentValue}/>
                    </div>
                </div>

                <div className={'p-10'}>
                    <BingMap from={order.address} to={order.restaurant.address}/>
                </div>
            </section>}
         </ParentContext.Provider>
    )
}
export default OrderRoute;

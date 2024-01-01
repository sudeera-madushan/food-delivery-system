import {Progress, Type} from '../components/progress/progress.tsx';
import TimeProgress from "../components/progress/timeProgress.tsx";
import BingMap from "../components/map/directions.tsx";
import ParentContext from "../context/orderRouteContext.ts";
import {useState} from "react";

function OrderRoute() : JSX.Element{
    const [parentValue, setParentValue] = useState('Initial Value');
    const updateParentValue = (newValue) => {
        setParentValue(newValue);
      };
    
                    const contextValue = {
                       parentValue,
                       updateParentValue,
                     };

    return (
        <ParentContext.Provider value={contextValue}>
            <section className={'flex'}>
                <div className={'flex justify-between w-[50vw] m-10 p-5 border rounded-xl h-[300px]'}>
                    <div>
                        <div className={'flex p-2'}>
                            <Progress state={Type.DONE} show={true}/>
                            <h1 className={'ml-2'}>Restaurant Confirmation</h1>
                        </div>
                        <div className={'flex p-2'}>
                            <Progress state={Type.PENDING} show={true}/>
                            <h1 className={'ml-2'}>Preparation and Cooking</h1>
                        </div>
                        <div className={'flex p-2'}>
                            <Progress state={Type.PENDING} show={false}/>
                            <h1 className={'ml-2'}>Dispatch for Delivery</h1>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1>Expected time</h1>
                        <TimeProgress time={parentValue}/>
                    </div>
                </div>

                <div className={'p-10'}>
                    {/*<Direction apiKey={'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O'}/>*/}
                    {/*<BingMap apiKey={'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O'} startLocation={"47.6062,-122.3321"} endLocation={"37.7749,-122.4194"}/>*/}
                    <BingMap/>
                </div>
            </section>
         </ParentContext.Provider>
    )
}
export default OrderRoute;
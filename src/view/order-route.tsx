import {Progress, Type} from '../components/progress/progress.tsx';
import TimeProgress from "../components/progress/timeProgress.tsx";
function OrderRoute() : JSX.Element{
    return (
        <section>
            <div className={'w-[50vw]'}></div>
            <div className={'w-[50vw] p-5'}>
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
                <TimeProgress time={15}/>
            </div>
        </section>
    )
}
export default OrderRoute;
import CircularProgress from '@mui/material-next/CircularProgress';
import { FaCheckCircle } from "react-icons/fa";
function OrderRoute() : JSX.Element{
    return (
        <section>
            <div className={'w-[50vw]'}></div>
            <div className={'w-[50vw] p-5'}>
                <div className={''}>
                    <div className={'flex progress p-2'}>
                        <CircularProgress className={''}/>
                        <FaCheckCircle className={'text-green-600 w-[25px] h-[25px]'}/>
                        <h1 className={'ml-2'}>Restaurant Confirmation</h1>
                    </div>
                    <div className={'flex'}>
                        <CircularProgress />
                        <h1>Preparation and Cooking</h1>
                    </div>
                    <div className={'flex'}>
                        <CircularProgress />
                        <h1>Dispatch for Delivery</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderRoute;
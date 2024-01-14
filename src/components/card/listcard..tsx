import {FaRegStar, FaStar} from "react-icons/fa";
import {ReactNode} from "react";

/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */

interface Props{
    children: ReactNode;
    name:string,
    address:string,
    rate:number
}
function ListCard(props:Props):JSX.Element {
    return (
        <div className={' shadow-md border-gray-400 w-[90vw] rounded-xl bg-gray-100 cursor-pointer'}>
            <div className={'flex justify-between px-4 pt-2'}>
                <h1 className={'font-concert-one text-2xl'}>{props.name}</h1>
                <h1 className={'font-concert-one text-2xl'}>{props.address}</h1>
                <div className={'m-2 flex h-0 justify-end'}>
                    {props.rate>0 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                    {props.rate>1 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                    {props.rate>2 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                    {props.rate>3 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                    {props.rate>4 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                </div>
            </div>
            {props.children}
        </div>
    )
}
export default ListCard;

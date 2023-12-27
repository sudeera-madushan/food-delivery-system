import {FaRegStar, FaStar} from "react-icons/fa";
interface Props{
    img:string,
    title:string,
    content:string,
    price:number,
    rate:number
}
function Card(props:Props):JSX.Element {
    return (
        <div className={'flex-shrink-0 shadow-lg m-3 mt-1 rounded-xl w-72 bg-white'}>
            <div className={'m-2 flex h-0 justify-end'}>
                {props.rate>0 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                {props.rate>1 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                {props.rate>2 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                {props.rate>3 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
                {props.rate>4 ?  <FaStar className={'text-yellow-500'}/> : <FaRegStar />}
            </div>
            <div className={'p-5 flex flex-col items-center'}>
                <img className={'w-44'} src={props.img} alt="french-fries.png"/>
            </div>
            <div className={'px-[8px] flex justify-between text-gray-800'}>
                <h1 className={' max-h-5 font-[Agbalumo]'}>{props.title}</h1>
                <h1 className={'font-bold max-h-5 text-right'}>LKR{props.price}</h1>
            </div>
            <p className={' px-[8px] text-[11px]  leading-[12px] mt-1 mb-2 text-justify font-semibold text-gray-500'}>{props.content}</p>
        </div>
    )
}
export default Card;
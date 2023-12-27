import {FaRegStar, FaStar} from "react-icons/fa";
import Card from "./card.tsx";
interface Card {
    img:string,
    title:string,
    content:string,
    price:number,
    rate:number
}
interface Props{
    name:string,
    address:string,
    rate:number,
    cards:Card[]
}
function RestaurantCard(props:Props):JSX.Element {
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
            <div className={'flex overflow-x-auto scroll-pane '}>

                {
                    props.cards.map((card:Card) => {
                        return <Card img={card.img} content={card.content} rate={card.rate} title={card.title} price={card.price}/>
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantCard;
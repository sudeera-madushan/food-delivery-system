import ListCard from "../listcard..tsx";
import {ReactNode} from "react";

/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
interface Props{
    name:string,
    address:string,
    rate:number,
    body:ReactNode
}
function  MenuCard(props:Props):JSX.Element {
    return (
        <ListCard name={props.name} address={props.address} rate={props.rate} children={
            <div className={'flex overflow-x-auto scroll-pane '}>
                {
                    props.body
                }
            </div>
        }/>
    )
}
export default MenuCard;

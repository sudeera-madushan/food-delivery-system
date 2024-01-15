import ListCard from "../listcard..tsx";
import {Switch} from "@mui/material";
import {useState} from "react";

/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
interface Menu {
    image: string,
    foodName: string,
    description: string,
    price: number,
    openTime: string,
    closeTime: string,
    size: string[] | null,
    restaurant ? : string,
    handleEdite: Function
}

function  MenuCard(props:Menu):JSX.Element {

    const [active, setActive] = useState(true)
    const handleChange = (e) => {
        setActive(e.target.checked);
    }


    return (
        <ListCard name={props.foodName} address={props.price.toString()+"LKR"} rate={5} children={
            <div className={'flex overflow-x-auto scroll-pane '}>
                <div className={"p-5 flex  justify-between"}>
                    <div className={"w-[300px] "}>
                        <img src={props.image} alt="fdfgdhg" className={" border rounded-xl bg-white shadow p-5"}/>
                    </div>
                    <div className={"text-justify pl-5 w-[45vw]"}>
                        <p>
                            {props.description}
                        </p>
                        <div className={"flex"}>
                            <div className={"p-5"}>
                                Active <br/>
                                <h1 className={"p-1 font-bold"}>{props.openTime} <span className={"font-mono"}>to</span> {props.closeTime}</h1>
                            </div>
                            {
                                props.size ?
                                    <div className={"pl-20 pt-5"}>
                                        <p>Size</p>
                                        <div className={"ml-2"}>
                                            {
                                                props.size.map((data: string, index: number) => {
                                                    return <div><h1 className={"m-0 p-0 font-bold h-2"}>{data}</h1><br/></div>
                                                })
                                            }
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>
                    <div className={"p-10 ml-10"}>
                        <Switch
                            checked={active}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}

                        />Active<br/>
                        <button className={" font-bold text-emerald-600 text-xl py-1 hover:bg-green-100 rounded-full p-2 m-5"}
                                onClick={props.handleEdite}>Edite</button>
                    </div>
                </div>
            </div>
        }/>
    )
}
export default MenuCard;

import Card from "./card.tsx";
import ListCard from "./listcard..tsx";
import {useNavigate} from "react-router-dom";
interface Props{
    name:string,
    address:string,
    rate:number,
    cards:any[]
}
function RestaurantCard(props:Props):JSX.Element {
    const navigate = useNavigate();
    return (
        <ListCard name={props.name} address={props.address} rate={props.rate} children={
            <div className={'flex overflow-x-auto scroll-pane '}>

                {
                    props.cards.map((card) => {
                        return <Card
                            img={card.image}
                            content={card.description}
                            rate={5} title={card.foodName}
                            price={card.price}
                            handleEvent={() => navigate('/menu', {state: {menu: card}})}/>
                    })
                }
            </div>
        }/>
    )
}
export default RestaurantCard;

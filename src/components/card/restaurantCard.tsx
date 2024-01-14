import Card from "./card.tsx";
import ListCard from "./listcard..tsx";
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
        <ListCard name={props.name} address={props.address} rate={props.rate} children={
            <div className={'flex overflow-x-auto scroll-pane '}>

                {
                    props.cards.map((card:Card) => {
                        return <Card img={card.img} content={card.content} rate={card.rate} title={card.title} price={card.price}/>
                    })
                }
            </div>
        }/>
    )
}
export default RestaurantCard;

/**
 * author : Sudeera Madushan
 * date : 1/19/2024
 * project : food-delivery-system
 */
interface Props{
    img:string,
    foodName:string,
    qty:number,
    price:number
}

const CartItem = (props:Props) :JSX.Element => {
    return (
        <div className={'w-[48vw] p-2  flex rounded-xl shadow-xl mx-5 my-2'}>
            <img src={props.img}
                 alt=""
                 className={'w-24 p-2 rounded-xl'}/>
            <div>
                <h1 className={'p-2 pb-0 font-concert-one text-2xl'}>{props.foodName}</h1>
                <div className={'p-2 font-concert-one text-2xl flex'}>
                    <h1 className={''}>Quantity : {props.qty}</h1>
                    <h1 className={'ms-10'}>LKR{props.price}</h1>
                </div>
            </div>
        </div>
    )
}
export default CartItem;

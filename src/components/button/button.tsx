/**
 * author : Sudeera Madushan
 * date : 1/15/2024
 * project : food-delivery-system
 */
interface Props{
    name:string,
    onClickEvent:Function,
    bgColor:string
    bgColorHover:string
}
const Button = (props:Props) :JSX.Element => {
    return (
        <button
            className={` text-white font-bold px-4 py-1 text-xl m-2 rounded hover:${props.bgColorHover} ${props.bgColor}`}
            onClick={e => props.onClickEvent(e)}
        >{props.name}</button>
    )
}

export default Button;

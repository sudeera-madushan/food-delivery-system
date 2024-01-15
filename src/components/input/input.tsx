/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
interface Props {
    name ? :string,
    placeholder:string,
    type ? :string
    handleEvent:Function,
    value?:string | number,
    fromTime?:number,
    toTime?:number
}
const Input = (props:Props) :JSX.Element => {
    return (
        <div className={"flex-row"}>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <input type={props.name} placeholder={props.placeholder}
                   className={"outline-none focus:border-b-cyan-600 focus:border-b-2 rounded w-full h-8 m-2 border transition duration-150"}
                   id={props.name}
                   onChange={e => props.handleEvent(e, props.name)}
                   value={props.value}
            />
        </div>
    )
}

export const TextArea = (props:Props) :JSX.Element => {
    return (
        <div className={"flex-row"}>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <textarea
                   className={"outline-none focus:border-b-cyan-600 w-full " +
                       "focus:border-b-2 rounded h-12 m-2 mb-0 border transition duration-150 font-thin text-sm"}
                   id={props.name}
                   onChange={e => props.handleEvent(e, props.name)}
                   value={props.value}
            />
        </div>
    )
}
export const TimeRange = (props:Props) :JSX.Element => {
    return (
        <div className={"flex-row w-full"}>
            <label htmlFor={'from'}>{props.placeholder}</label><br/>
            <input type={'time'} placeholder={"from"}
                   className={"outline-none focus:border-b-cyan-600 focus:border-b-2 rounded w-36 h-8 m-2 border transition duration-150"}
                   id={'from'} onChange={e => props.handleEvent(e, e.target.id)}
                   value={props.fromTime}
            />
            <input type={'time'} placeholder={"to"}
                   className={"outline-none focus:border-b-cyan-600 focus:border-b-2 rounded w-36 h-8 m-2 border transition duration-150"}
                   id={'to'} onChange={e => props.handleEvent(e, e.target.id)}
                   value={props.toTime}
            />
        </div>
    )
}

export default Input;

import CircularProgress from "@mui/material-next/CircularProgress";
import {FaCheckCircle} from "react-icons/fa";
import {useEffect, useState} from "react";

export enum Type {
    PENDING,DONE
}
interface Props {
    state:Type,
    show:boolean
}

export function Progress(props:Props):JSX.Element {

    const [showCircular, setShowCircular] = useState(true);
    const [showCheck, setShowCheck] = useState(false);

    useEffect(() => {
        // Show CircularProgress for 30 seconds
        // const timeoutId = setTimeout(() => {
        //     setShowCircular(false);
        //     setShowCheck(true);
        // }, props.timeout);

        if (props.state === Type.DONE) {
            setShowCircular(false);
            setShowCheck(true);
        }

    }, []);
    return (
        <div className={'w-[25px] h-[25px]'}>
            <div className={` progress ${props.show ? '' : 'hidden'}`}>
                 {showCircular && <CircularProgress className={''} />}
                {showCheck && <FaCheckCircle className={'text-green-600 w-[25px] h-[25px]'} />}
            </div>
        </div>
    )
}

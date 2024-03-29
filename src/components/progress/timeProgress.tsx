import React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FaCheckCircle} from "react-icons/fa";

interface Props {
    sec:number,
    time:number
}
function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number , time: number},
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    className={'h-2'}
                >{`${Math.round(props.value )}`}</Typography>
            </Box>
        </Box>
    );
}

export default function TimeProgress(props:Props) {
    const [mins, setMins] = React.useState(props.sec);
    const [progress, setProgress] = React.useState(props.time);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress === 0 ? 0 : prevProgress - 1
            );
        }, 100);

        // Clear the interval once progress reaches 100%
        if (progress <= 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    return progress <= 0 ? <FaCheckCircle className={'text-green-600 w-[35px] h-[35px]'} /> : <CircularProgressWithLabel value={progress} time={progress} className={'w-2 h-2'}/>;
}

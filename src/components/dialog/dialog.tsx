/**
 * author : Sudeera Madushan
 * date : 1/15/2024
 * project : food-delivery-system
 */
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MapLocation from "../map/location.tsx";
import {useEffect, useState} from "react";

interface Props {
    open : boolean,
    getLocation: Function
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
export default function CustomizedDialogs(props: Props) {
    const [open, setOpen] = React.useState(props.open);
    const [curLocation, setCurLocation] = useState<{ latitude: number; longitude: number } | null>(null);

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const position = await getCurrentPosition();
                setCurLocation(position);
            } catch (error:any) {
                console.error('Error getting location:', error.message);
            }
        };

        getUserLocation();
    }, []);
    const getCurrentPosition = (): Promise<{ latitude: number; longitude: number }> => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error('Geolocation is not supported by this browser.'));
            }
        });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const openDialog = (open:boolean) => {
        setOpen(open);
    };

    const getLocation = (l:any , a:any, z:any) => {
        props.getLocation(l,a,z)
    }

    return (
        <React.Fragment >
            <button className={"ml-4 border rounded-full text-blue-700 px-2"} onClick={handleClickOpen}>+</button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Click Your Location
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers >
                    <div className={"w-[60vw]"}>

                    <MapLocation curLocation={curLocation} getLocation={getLocation} openDialog={openDialog}/>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

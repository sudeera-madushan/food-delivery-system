/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
import {Backdrop} from "@mui/material";
import Menucard from "../../components/card/restaurant/menucard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

export interface IMenu {
    image: string,
    foodName: string,
    description: string,
    price: number,
    openTime: string,
    closeTime: string,
    size: string[] | null,
    restaurant ? : string
}
function Mymenus() : JSX.Element {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<IMenu[]>([]);

    useEffect(()=>{
        setOpen(true)
        getMyMenus();
    },[]);

    const getMyMenus = () => {
        axios.get("http://localhost:8080/api/v1/menu/all")
            .then(r => {
                setOpen(false);
                setData(r.data.data)
            })
            .catch(e => {
                setOpen(false);
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }


    return (
        <section>
            <section className={'flex flex-col gap-5 items-center justify-center my-10'}>
                {
                    data.map((r:IMenu, i: number) => {
                        return <Menucard
                            image={r.image}
                            foodName={r.foodName}
                            description={r.description}
                            price={r.price}
                            openTime={r.openTime}
                            closeTime={r.closeTime}
                            size={r.size}/>
                    })
                }
            </section>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </section>
    );
}
export default Mymenus;

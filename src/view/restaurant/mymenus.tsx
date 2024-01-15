/**
 * author : Sudeera Madushan
 * date : 1/14/2024
 * project : food-delivery-system
 */
import {Backdrop} from "@mui/material";
import MenuCard from "../../components/card/restaurant/menuCard.tsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../../components/button/button.tsx";
import {useNavigate} from "react-router-dom";
import ParentContext, {BackdropContext} from "../../context/orderRouteContext.ts";
import Cookies from "js-cookie";

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
    const { backdropValue, updateBackdropValue } = useContext(BackdropContext);
    const [data, setData] = useState<IMenu[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        updateBackdropValue(true)
        getMyMenus();
    },[]);
    const ACCESS_TOKEN = Cookies.get("restaurant");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    const getMyMenus = () => {
        axios.get("http://localhost:8080/api/v1/menu/all", {headers: headers})
            .then(r => {
                setData(r.data.data)
                updateBackdropValue(false)
            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
                updateBackdropValue(false)
            })

    }

    const openCreateMenu = (e) => {
        updateBackdropValue(true)
        navigate("/restaurant/menu-create")
    }


    return (
        <section>
            <section className={'flex flex-col gap-5 items-center justify-center my-10'}>
                <div className={"text-right w-[90vw]"}>
                    <Button  name={"Create"} onClickEvent={openCreateMenu} bgColor={"bg-emerald-600"} bgColorHover={"bg-emerald-800"}/>
                </div>
                {
                    data.map((r:IMenu, i: number) => {
                        return <MenuCard
                            image={r.image}
                            foodName={r.foodName}
                            description={r.description}
                            price={r.price}
                            openTime={r.openTime}
                            closeTime={r.closeTime}
                            size={r.size}
                            handleEdite={() => navigate('/restaurant/menu-create', {state: {menu: r}})}
                        />
                    })
                }
            </section>
        </section>
    );
}
export default Mymenus;

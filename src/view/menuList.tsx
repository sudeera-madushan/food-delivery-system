import Card from "../components/card/card.tsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {BackdropContext} from "../context/orderRouteContext.ts";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

export interface IMenu{
    image: string,
    foodName: string,
    description: string,
    price: number,
    openTime: string,
    closeTime: string,
    size: string[] | null,
    isActive: boolean,
    restaurant: object
}

function MenuList(): JSX.Element {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const { updateBackdropValue } = useContext(BackdropContext);
    const ACCESS_TOKEN = Cookies.get("user");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    useEffect(() => {
        updateBackdropValue(true)
        getAllMenus()
    }, [])

    const getAllMenus = () => {
        axios.get("http://localhost:8080/api/v1/menu/all", {headers: headers})
            .then(r => {
                setData(r.data.data)
                console.log(r.data.data)
                updateBackdropValue(false)
            })
            .catch(e => {
                console.log(e);
                navigate("/sign-in")
                updateBackdropValue(false)
            })
    }


    return (
        <section>
            <section className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto my-10' }>

                {
                    data.map((r:IMenu) => {
                        return <Card
                            img={r.image}
                            title={r.foodName}
                            price={r.price}
                            rate={3}
                            content={r.description}
                            handleEvent={() => navigate('/menu', {state: {menu: r}})}
                        />
                    })
                }

            </section>
        </section>
    )
}
export default MenuList;

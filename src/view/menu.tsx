import {useContext, useEffect, useState} from "react";
import Card from "../components/card/card.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {BackdropContext, CartContext} from "../context/orderRouteContext.ts";
import Cookies from "js-cookie";
import axios from "axios";
import {IMenu} from "./menuList.tsx";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Menu():JSX.Element {
    const [count, setCount] = useState<number>(1);
    const [disabled, setDisabled] = useState<boolean>(false);
    const {cart} = useContext(CartContext);
    const location = useLocation();
    const [data, setData] = useState<Menu[]>([])
    const { updateBackdropValue } = useContext(BackdropContext);
    const navigate = useNavigate();
    const menu = location?.state ?.menu;
    const ACCESS_TOKEN = Cookies.get("user");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    const [open, setOpen] = useState(false);
    const getOtherMenu = () => {
        axios.get("http://localhost:8080/api/v1/menu/all", {headers: headers})
            .then(r => {
                let x = r.data.data;
                for (let i = 0; i < x.length; i++) {
                    console.log(r);
                    if (menu._id === x[i]._id){
                        data.push(x[i])
                    }
                }

                updateBackdropValue(false)
            })
            .catch(e => {
                console.log(e)
                updateBackdropValue(false)
            })
    };
    useEffect(() => {

        getOtherMenu()
        cart.map((r,i)=>{
            if (r.menu._id === menu._id){
                setDisabled(true)
            }
        })
    }, []);

    const increment = () => {
        if (count<10) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count>1) {
            setCount(count - 1);
        }
    };
    const addToCart = () => {
        let data = {
            menu:menu,
            qty:count,
            price:10

        }
        handleClick()
        cart.push(data)
        navigate('/menu-list');
    };
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const selectMenu = (m:IMenu) => {
        updateBackdropValue(true)
        setData([])
        location.state.menu = m;
        // navigate('/menu', {state: {menu: m}})
        setTimeout(() => {
            getOtherMenu()
        },1000)

    }


    return (
        <section className={'p-10'}>
            <div className={'w-[50vw] flex'}>
                <img src={menu.image} className={"rounded-2xl"}/>
                <div className={'p-10 '}>
                    <h1 className={'text-[42px] w-[37vw] font-concert-one text-[var(--secondary-color)]'}>{menu.foodName}</h1>
                    <p className={'text-justify'}>{menu.description}
                    </p>
                    <div className={'flex mt-8 justify-around'}>
                        <div className={''}>
                            <button className={'mt-1 text-4xl border-2 text-center rounded-full w-12  pb-2  hover:bg-[var(--primary-color)] hover:text-white'}
                                onClick={decrement}>-</button>
                            <input type="number" id="numberInput"
                                   className="custom-number-input focus:outline-none font-concert-one
                                   w-20 text-center border-[var(--primary-color)]  border-2 rounded-full h-14 text-2xl mx-2"
                                   value={count}/>
                            <button className={'text-4xl border-2 text-center rounded-full w-12  pb-2 mt-1 hover:bg-[var(--primary-color)] hover:text-white'}
                                onClick={increment}>+</button>
                        </div>
                        <h1 className={'text-3xl font-concert-one m-3 '}>LKR{menu.price}</h1>
                    </div>
                        <button
                            className={'bg-[var(--primary-color)] font-bold text-white px-10 py-1 rounded-xl mt-10 ms-10 hover:bg-red-600 text-xl disabled:bg-red-700 disabled:text-gray-300'}
                            onClick={addToCart}
                            disabled={disabled}
                        >ADD TO CART</button>
                </div>
            </div>
            <div className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto my-10'}>
                {
                    data.map((r:IMenu) => {
                        return <Card
                            img={r.image}
                            title={r.foodName}
                            price={r.price}
                            rate={3}
                            content={r.description}
                            handleEvent={() => selectMenu(r)}
                        />
                    })
                }
            </div>
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'bottom',horizontal: 'right' }}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Menu add to cart success !
                    </Alert>
                </Snackbar>
            </div>
        </section>
    )
}
export default Menu;

import {useContext, useEffect, useState} from "react";
import Card from "../components/card/card.tsx";
import {useLocation} from "react-router-dom";
import { CartContext} from "../context/orderRouteContext.ts";
import Item from "./../context/orderRouteContext.ts"

function Menu():JSX.Element {
    const [count, setCount] = useState<number>(1);
    const [disabled, setDisabled] = useState<boolean>(false);
    const {  cart} = useContext(CartContext);
    const location = useLocation();
    const menu = location?.state ?.menu;

    useEffect(() => {
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
        // cart.splice(data,1)
        cart.push(data)
        console.log(cart)
    };
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
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
                <Card img={'./../../src/assets/home/pngwing.com.png'} title={'French Rise'} price={500.00} rate={3} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aspernatur beatae consequatur debitis distinctio dolor enim iste minus'}/>
            </div>
        </section>
    )
}
export default Menu;

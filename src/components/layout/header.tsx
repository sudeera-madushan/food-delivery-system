import { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import SearchInput from "../input/searchInput.tsx";
import { CgMenuRightAlt , CgMenuLeftAlt } from "react-icons/cg";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import axios from "axios";
import Cookies from "js-cookie";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cssClass, setCssClass] = useState<string>('translate-x-180');
    const ACCESS_TOKEN = Cookies.get("user");
    const [loged, setLoged] = useState(false);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }


    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

            auth()
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();
    const auth = () => {
        try {
            axios.post("http://localhost:8080/api/v1/user/auth",{} ,{headers: headers})
            .then(r => {
                if (r.data.data.restaurant){
                    setLoged(true)
                }else if (r.data.data.user){
                    setLoged(true)
                }else {
                    setLoged(false)
                }
            })
            .catch(e => {
                setLoged(false)
            })
        } catch (error) {
            console.error(error)
            setLoged(false)
        }
       
    }

    const openMenu = () => {
        setCssClass('translate-x-0')
    }
    const closeMenu = () => {
        setCssClass('translate-x-[180px]')
    }


    return (
        <>
            <div className={'h-20'}></div>
            <header className={`z-[1000] fixed top-0 left-0 w-full p-5 transition-all 
            ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}
             max-[986px]:p-3 `}>
                <nav className={'flex justify-between items-center'}>
                    <div className={'flex'}>
                        <img src="./../../../src/assets/french-fries.png" title="logo" alt="logo" className={'w-[50px]' +
                            ' max-[986px]:w-[40px]  max-[456px]:w-[30px]  max-[456px]:h-[30px]  max-[456px]:mt-2'}/>
                        <h1 className={'mt-1 text-5xl text-[var(--secondary-color)] font-bold font-concert-one ' +
                            'max-[986px]:text-4xl max-[456px]:text-[25px]'}>
                            FoodSwift
                        </h1>
                    </div>
                    <div>
                        <SearchInput/>
                    </div>
                    <CgMenuLeftAlt className={'text-4xl text-[var(--primary-color)] cursor-pointer hidden mt-[7px] max-[856px]:block'} onClick={openMenu}/>
                    <ul id={'menu-slider'} className={'flex gap-[2vw] text-white transition duration-600 min-[856px]:translate-x-0 ' +
                        'max-[986px]:gap-[1vw] ' +
                        'max-[856px]:block max-[856px]:pt-5 max-[856px]:fixed  ' +
                        `max-[856px]:top-0  max-[856px]:h-full max-[856px]:w-44 ${cssClass}
                        max-[856px]:text-right max-[856px]:bg-emerald-600 max-[856px]:right-0 `}>
                        <CgMenuRightAlt className={'max-[856px]:inline-block mb-2 items-end text-4xl mr-[12px] text-[var(--primary-color)] hidden'} onClick={closeMenu}/>
                        <Link to={'/'} className={''}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>Home</li></Link>
                        <Link to={'/menu-list'}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>Menu</li></Link>
                        <Link to={'/restaurant-list'}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>Restaurant</li></Link>
                        <Link to={'/orders'}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>Orders</li></Link>
                        <Link to={'/cart'}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}><CiShoppingCart className={'text-2xl'}/></li></Link>
                        {
                            loged ?
                                <li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>
                                    <Link to={'/sign-in'}><CiUser className={'text-2xl bold'}/></Link></li> :
                                <Link to={'/sign-in'}><li className={'max-[856px]:hover:rounded max-[856px]:mr-[5px]'}>Sign In</li></Link>
                        }
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

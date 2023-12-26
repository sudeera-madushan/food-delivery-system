import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import SearchInput from "../input/searchInput.tsx";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className={'h-20'}></div>
            <header className={`z-[1000] fixed top-0 left-0 w-full p-5 transition-all ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
                <nav className={'flex justify-between items-center'}>
                    <div className={'flex'}>
                        <img src="./../../../src/assets/french-fries.png" title="logo" alt="logo" className={'w-[50px]'}/>
                        <h1 className={'mt-1 text-5xl text-[var(--secondary-color)] font-bold font-concert-one'}>
                            FoodSwift
                        </h1>
                    </div>
                    <ul className={'flex gap-[2vw] text-white'}>
                        <SearchInput/>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/menu-list'}><li>Menu</li></Link>
                        <Link to={'/restaurant-list'}><li>Restaurant</li></Link>
                        <li>Sign in / Sign up</li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

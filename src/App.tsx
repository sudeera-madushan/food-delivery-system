import './App.css';
import Footer from "./components/layout/footer.tsx";
import Home from "./view/home.tsx";
import Header from "./components/layout/header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RestaurantList from "./view/restaurantList.tsx";
import MenuList from "./view/menuList.tsx";
import Menu from "./view/menu.tsx";
import Cart from "./view/cart.tsx";
import OrderRoute from './view/order-route.tsx';
import RestaurantHome from "./view/restaurant/restauranthome.tsx";
import CreateMenu from "./view/restaurant/createMenu.tsx";
import RestaurantHeader from "./components/layout/restaurantheader.tsx";
import Mymenus from "./view/restaurant/mymenus.tsx";
import {useState} from "react";
import {BackdropContext, CartContext} from "./context/orderRouteContext.ts";
import CircularProgress from "@mui/material/CircularProgress";
import {Backdrop} from "@mui/material";
import SignupRestaurant from './view/restaurant/signuprestaurant.tsx';
import SignIn from "./view/signin.tsx";
import SignUp from './view/signup.tsx';
function App() {
    const apikey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';
    const [backdropValue, setBackdropValue] = useState(false);
    const [cart] = useState([]);
    const updateBackdropValue = (newValue:boolean) => {
        setBackdropValue(newValue);
    };
    const backdropContext = {
        updateBackdropValue,
        backdropValue,
    };
    const cartContext = {
       cart
    };

        return (
            <>
                <BackdropContext.Provider value={backdropContext}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/*'} element={
                            <>
                        <CartContext.Provider value={cartContext}>
                                <Header/>
                                <Routes>
                                    <Route path={'/*'} element={<Home apikey={apikey}/>}/>
                                    <Route path={'/menu-list/*'} element={<MenuList/>}/>
                                    <Route path={'/restaurant-list/*'} element={<RestaurantList/>}/>
                                    <Route path={'/menu/*'} element={<Menu/>}/>
                                    <Route path={'/cart/*'} element={<Cart/>}/>
                                    <Route path={'/route/*'} element={<OrderRoute/>}/>
                                    <Route path={'/sign-in/*'} element={<SignIn/>}/>
                                    <Route path={'/sign-up/*'} element={<SignUp/>}/>
                                </Routes>
                        </CartContext.Provider>
                            </>
                        }/>
                        <Route path={'/restaurant/*'} element={
                            <>
                                <RestaurantHeader/>
                                <Routes>
                                    <Route path={'/restaurant/home/*'} element={<RestaurantHome/>}/>
                                    <Route path={'/sign-up/*'} element={<SignupRestaurant/>}/>
                                    <Route path={'/menu-create/*'} element={<CreateMenu/>}/>
                                    <Route path={'/my-menus/*'} element={<Mymenus/>}/>
                                </Routes>
                            </>
                        }/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={backdropValue}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </BackdropContext.Provider>
            </>
  )
}

export default App

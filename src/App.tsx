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
import CreateMenu from "./view/restaurant/createmenu..tsx";
function App() {
    const apikey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';

        return (
            <>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={'/*'} element={<Home apikey={apikey}/>}/>
                        <Route path={'/menu-list/*'} element={<MenuList/>}/>
                        <Route path={'/restaurant-list/*'} element={<RestaurantList/>}/>
                        <Route path={'/menu/*'} element={<Menu/>}/>
                        <Route path={'/cart/*'} element={<Cart/>}/>
                        <Route path={'/route/*'} element={<OrderRoute/>}/>
                        <Route path={'/restaurant-home/*'} element={<RestaurantHome/>}/>
                        <Route path={'/menu-create/*'} element={<CreateMenu/>}/>
                    </Routes>

                    <Footer/>
                </BrowserRouter>

            </>
  )
}

export default App

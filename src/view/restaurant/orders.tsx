import Button from "../../components/button/button.tsx";
import React, {useContext, useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { IoCloseCircleSharp } from "react-icons/io5";
import {BackdropContext} from "../../context/orderRouteContext.ts";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import OrderCart from "../../components/card/ordercart.tsx";
import ResOrderCart from "../../components/card/restaurant/resordercart.tsx";
import {socket} from "../../App.tsx";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

/**
 * author : Sudeera Madushan
 * date : 1/22/2024
 * project : food-delivery-system
 */
const Orders = (() :JSX.Element =>{
    const { updateBackdropValue } = useContext(BackdropContext);
    const [orders, setOrders] = useState<any[]>([])
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const ACCESS_TOKEN = Cookies.get("restaurant");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    useEffect(() => {
        updateBackdropValue(true);
        getAllMyOrders();

        socket.on("newOrderToRestaurant", (message: string) => {
            setOpen(true);
            getAllMyOrders()
        });

    }, []);

    const getAllMyOrders = () => {
        updateBackdropValue(true);
        setOrders([]);
        axios.get("http://localhost:8080/api/v1/order/my-all", {headers: headers})
            .then((r:any) => {
                setOrders(r.data.data);
                console.log(r.data.data)
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            })
    };

    const conformOrder = (id:string) => {

        updateBackdropValue(true)
        axios.post("http://localhost:8080/api/v1/order/conform", {_id:id}, {headers: headers})
            .then((r:any) => {
                getAllMyOrders();
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            });
    }
    const cookedOrder = (id:string) => {

        updateBackdropValue(true)
        axios.post("http://localhost:8080/api/v1/order/cooked", {_id:id}, {headers: headers})
            .then((r:any) => {
                getAllMyOrders();
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            });
    }

    const completeOrder = (id:string) => {
        console.log(
            1111
        )
        updateBackdropValue(true)
        axios.post("http://localhost:8080/api/v1/order/complete", {_id:id}, {headers: headers})
            .then((r:any) => {
                getAllMyOrders();
                updateBackdropValue(false)
            })
            .catch((e:any) => {
                console.log(e);
                updateBackdropValue(false)
            });
    }

    const handleClose = () => {
        setOpen(false);
    };
  return (
      <section className={"p-20 pt-10 border m-56 mt-1 rounded-xl shadow"}>
          <div>
              <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Orders</h1>
          </div>
          <div className={"mt-5"}>
              {
                  orders.map((v) => {
                      return <ResOrderCart
                          _id={v._id}
                          foodName={v.cart[0].menu.foodName}
                          address={v.address}
                          price={v.price}
                          Distance={v.distance}
                          states={v.states}
                          ordered={v.ordered as Date}
                          onClick={() => navigate('/route', {state:{order:v}})}
                          conformOrder={conformOrder}
                          cookedOrder={cookedOrder}
                          completeOrder={completeOrder}
                      />;
                  })
              }
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'bottom',horizontal: 'right' }}>
              <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: '100%' }}
              >
                  You Got New Order !
              </Alert>
          </Snackbar>
      </section>
  )
})
export default Orders;

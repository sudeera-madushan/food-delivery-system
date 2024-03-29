import Input from "./../../components/input/input.tsx"
import CustomizedDialogs from "../../components/dialog/dialog.tsx";
import {useContext, useState} from "react";
import {BackdropContext} from "../../context/orderRouteContext.ts";
import Button from "../../components/button/button.tsx";
import axios from "axios";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
/**
 * author : Sudeera Madushan
 * date : 1/15/2024
 * project : food-delivery-system
 */
export interface Restaurant{
    restaurantName:string,
    ownerNIC:string,
    ownerFullName:string,
    username:string,
    email:string,
    mobile:number,
    password:string,
    location:{ latitude: number; longitude: number } | null,
    address:string
}
const SignupRestaurant = () :JSX.Element => {

    const navigate = useNavigate();
    const [openMap, setOpenMap] = useState(false)
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null)
    const { backdropValue, updateBackdropValue } = useContext(BackdropContext);
    const [restaurantName, setRestaurantName] = useState<string>("")
    const [ownerNIC, setOwnerNIC] = useState<string>("")
    const [ownerFullName, setOwnerFullName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [mobile, setMobile] = useState<number>(0)
    const [password, setPassword] = useState<string>("")
    const [address, setAddress] = useState<string>("")

    const getLocation = (l:any , a:any, z:any) => {
        setLocation(l);
        setAddress(a)
        setOpenMap(false);
        updateBackdropValue(false)
    }

    const handleInput = (e:any, type:any) => {
        const  value = e.target.value;
        switch (type){
            case "restaurantName":
                setRestaurantName(value)
                break;
            case "ownerNIC":
                setOwnerNIC(value)
                break;
            case "ownerFullName":
                setOwnerFullName(value)
                break;
            case "username":
                setUsername(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "mobile":
                setMobile(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
                break;

        }
    }

    const singUp = () => {
        updateBackdropValue(true)
        let restaurant:Restaurant = {
            restaurantName:restaurantName,
            ownerNIC:ownerNIC,
            ownerFullName:ownerFullName,
            username:username,
            email:email,
            mobile:mobile,
            password:password,
            location:location,
            address:address
        }
        axios.post("http://localhost:8080/api/v1/restaurant/sign-up", restaurant)
            .then(r => {
                updateBackdropValue(false)
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Sing Up successfully!"
                });
                navigate('/sign-in');
            })
            .catch(e => {
                updateBackdropValue(false)
                console.log(e);
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }
    return (
        <section className={"p-5 pt-1 border m-5 mt-1 rounded-xl shadow"}>
            <div>
                <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Sign Up Restaurant</h1>
            </div>
            <div className={"flex justify-evenly mt-5"}>
                <div>
                    <Input placeholder={"Restaurant Name"} name={"restaurantName"} type={"text"} handleEvent={handleInput}/>
                    <Input placeholder={"Owner NIC"} name={"ownerNIC"} type={"text"} handleEvent={handleInput}/>
                    <Input placeholder={"Owner Full Name"} name={"ownerFullName"} type={"text"} handleEvent={handleInput}/>
                    <Input placeholder={"Username"} name={"username"} type={"text"} handleEvent={handleInput}/>


                </div>
                <div>
                    <label htmlFor={"location"}>{"Location"}
                        <CustomizedDialogs open={openMap} getLocation={getLocation}
                        /></label>
                    <input type={"text"} placeholder={"Location"}
                           className={"outline-none focus:border-b-cyan-600 focus:border-b-2 rounded w-full h-8 m-2 border transition duration-150"}
                           id={"location"}
                           disabled={true}
                           value={address}
                    />
                    <Input placeholder={"Email"} name={"email"} type={"email"}  handleEvent={handleInput}/>
                    <Input placeholder={"Mobile"} name={"mobile"} type={"number"}  handleEvent={handleInput}/>
                    <Input placeholder={"Password"} name={"password"} type={"password"} handleEvent={handleInput}/>
                </div>
            </div>
            <div className={"w-full text-right "}>
                <Button  name={"Sing Up"} bgColor={"bg-blue-600 mr-52"} bgColorHover={"bg-blue-800"} onClickEvent={singUp}/>
                <Link to={'/sign-up'}><h1 className={"text-blue-700 cursor-pointer"}>sign up to order</h1></Link>
            </div>
        </section>
    )
}
export default SignupRestaurant;

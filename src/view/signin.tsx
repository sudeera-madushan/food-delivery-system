import axios from "axios";
import Swal from "sweetalert2";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import Input from "../components/input/input.tsx";
import Button from "../components/button/button.tsx";
import {BackdropContext} from "../context/orderRouteContext.ts";
/**
 * author : Sudeera Madushan
 * date : 1/15/2024
 * project : food-delivery-system
 */
interface Restaurant{
    username:string,
    password:string
}
const SignIn = () :JSX.Element => {

    const navigate = useNavigate();
    const { backdropValue, updateBackdropValue } = useContext(BackdropContext);
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleInput = (e:any, type:any) => {
        const  value = e.target.value;
        switch (type){
            case "username":
                setUsername(value)
                break;
            case "password":
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const singIn= () => {
        const headers = {'Content-Type': 'application/json'}
        updateBackdropValue(true)
        let user = {
            username:username,
            password:password
        }

        axios.post("http://localhost:8080/api/v1/user/sign-in", user, {headers: headers})
            .then(r => {

                if (r.data.data.user){
                    Cookies.set("user", r.data.data.accessToken);
                    navigate('/menu-list');
                } else if (r.data.data.restaurant){
                    Cookies.set("restaurant", r.data.data.accessToken);
                    navigate('/restaurant/my-menus');
                }


                // Cookies.set("user", JSON.stringify(r.data.data.user)); // JSON.parse("")
                // console.log(r.data.data.accessToken)
                // navigate('/restaurant/my-menus');

                updateBackdropValue(false)
            })
            .catch(e => {
                updateBackdropValue(false)
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }
    return (
        <section className={"p-20 pt-10 border m-96 mt-20 rounded-xl shadow"}>
            <div>
                <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Sign In</h1>
            </div>
            <div className={"flex justify-evenly mt-5"}>
                <div>
                    <Input placeholder={"Username"} name={"username"} type={"text"} handleEvent={handleInput}/>
                    <Input placeholder={"Password"} name={"password"} type={"password"} handleEvent={handleInput}/>
                </div>
            </div>
            <div className={"w-full text-center "}>
                <Button  name={"Sing In"} bgColor={"bg-blue-600"} bgColorHover={"bg-blue-800"} onClickEvent={singIn}/>
                <Link to={'/sign-up'}><h1 className={"text-blue-700 cursor-pointer"}>sign up</h1></Link>
            </div>
        </section>
    )
}
export default SignIn;

import ImagePicker from "../../components/imagepicker/imagePicker.tsx";
import {useContext, useEffect, useState} from "react";
import Input, {TextArea, TimeRange} from "../../components/input/input.tsx";
import axios from "axios";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {Backdrop, Switch} from "@mui/material";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {BackdropContext} from "../../context/orderRouteContext.ts";
import Cookies from "js-cookie";
/**
 * author : Sudeera Madushan
 * date : 1/13/2024
 * project : food-delivery-system
 */
interface Menu{
    image: string
    foodName: string,
    description: string,
    price: number,
    openTime: number,
    closeTime: number,
    size: string[]|null
}
const CreateMenu = ():JSX.Element => {
    const { backdropValue, updateBackdropValue } = useContext(BackdropContext);
    const navigate = useNavigate();
    const location = useLocation();
    const menu = location?.state ?.menu;
    const [image, setImage] = useState<any>(menu? menu.image : null);
    const [foodName, setFoodName] = useState<string>(menu? menu.foodName : "");
    const [description, setDescription] = useState<string>(menu ? menu.description : "");
    const [price, setPrice] = useState<number>(menu ? menu.price : 0);
    const [openTime, setOpenTime] = useState<number>(menu ? menu.openTime : 0);
    const [closeTime, setCloseTime] = useState<number>(menu ? menu.closeTime : 0);
    const [active, setActive] = useState(menu ? menu.size : false);
    const [sizeSmall, setSizeSmall] = useState(menu ? menu.size.find(s => s === "Small") : false);
    const [sizeMedium, setSizeMedium] = useState(menu ? menu.size.find(s => s === "Medium") : false);
    const [sizeLarge, setSizeLarge] = useState(menu ? menu.size.find(s => s === "Large") : false);
    const [btn, setBtn] = useState(menu ? "Update" : "Create");
    const ACCESS_TOKEN = Cookies.get("restaurant");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ACCESS_TOKEN
    }
    useEffect(()=>{
        updateBackdropValue(false);
        console.log(menu)
    },[]);

    const handleChange = (e:any, type:string) => {
        switch (type) {
            case "image":
                setImage(e);
                break;
            case "foodName":
                setFoodName(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "price":
                setPrice(e.target.value);
                break;
            case "from":
                setOpenTime(e.target.value);
                break;
            case "to":
                setCloseTime(e.target.value);
                break;
            default:
                break;
        }
    }

    const hangeMenu = () => {
        updateBackdropValue(true)
        let sizes: string[] | null = []
        if (active){
            if (sizeSmall){
                sizes.push("Small")
            }
            if (sizeMedium){
                sizes.push("Medium")
            }
            if (sizeLarge){
                sizes.push("Large")
            }
        }else {
            sizes = null;
        }

        if (menu) {
            updateMenu(sizes)

        } else {
            saveMenu(sizes)
        }
    }
    const saveMenu = (sizes : string[] | null) => {
        let menuData: Menu = {
            image: image,
            foodName: foodName,
            description: description,
            price: price,
            openTime: openTime,
            closeTime: closeTime,
            size: sizes
        }


        axios.post("http://localhost:8080/api/v1/menu/save", menuData,{headers: headers})
            .then(r => {
                updateBackdropValue(false)
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Menu created successfully!"
                });
                navigate('/restaurant/my-menus');
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
    const updateMenu = (sizes : string[] | null) => {
            menu.image = image;
            menu.foodName = foodName;
            menu.description = description;
            menu.price = price;
            menu.openTime = openTime;
            menu.closeTime = closeTime;
            menu.size = sizes;

        axios.put("http://localhost:8080/api/v1/menu/update", menu, {headers: headers})
            .then(r => {
                updateBackdropValue(false)
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Menu Update successfully!"
                });
                navigate('/restaurant/my-menus');
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

    const handleSizes = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setActive(e.target.checked)
        if (active){
            setSizeLarge(false)
            setSizeMedium(false)
            setSizeSmall(false)
        }
    }
    const handleSizesSmall = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setSizeSmall(e.target.checked)
    }

    const handleSizesMedium = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setSizeMedium(e.target.checked)
    }
    const handleSizesLarge = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setSizeLarge(e.target.checked)
    }

  return (
      <section className={"p-10 mx-32 border rounded shadow my-2 font-bold"}>
              <div className={"flex m-2"}>
                <IoArrowBackCircleSharp className={"text-[var(--primary-color)] text-5xl hover:text-rose-700 m-2"}
                                        onClick={() => navigate('/restaurant/my-menus')}/><br/>
                <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>{btn} Menu</h1>
              </div>
          <div className={"flex justify-center"}>
                  <ImagePicker getImage={handleChange} image={image}/>
              <div className={"ml-20 w-96"}>
                  <Input handleEvent={handleChange} placeholder={"Food Name"} name={"foodName"} type={"text"} value={foodName}/>
                  <TextArea handleEvent={handleChange} placeholder={"Description"} name={"description"} value={description}/><br/>
                  <Input handleEvent={handleChange} placeholder={"Food Price (LKR)"} name={"price"} type={"number"} value={price}/>
                  <TimeRange placeholder={"Active"} handleEvent={handleChange} fromTime={openTime} toTime={closeTime}/>
                  <div className={"text-right"}>
                      <button
                          className={"bg-blue-600 text-white font-bold px-4 py-1 text-xl m-2 rounded hover:bg-blue-800 "}
                          onClick={hangeMenu}
                      >{btn}</button>
                  </div>
              </div>
              <div className={"ml-10"}>
                  <Switch
                      checked={active}
                      onChange={handleSizes}
                      inputProps={{ 'aria-label': 'controlled' }}
                  />Size <br/>
                  <Switch
                      checked={sizeSmall}
                      onChange={handleSizesSmall}
                      inputProps={{ 'aria-label': 'controlled' }}
                      disabled={!active}
                  />Small <br/>
                  <Switch
                      checked={sizeMedium}
                      onChange={handleSizesMedium}
                      inputProps={{ 'aria-label': 'controlled' }}
                      disabled={!active}
                  />Medium <br/>
                  <Switch
                      checked={sizeLarge}
                      onChange={handleSizesLarge}
                      inputProps={{ 'aria-label': 'controlled' }}
                      disabled={!active}
                  />Large

              </div>
          </div>

      </section>
  )
}
export default CreateMenu;

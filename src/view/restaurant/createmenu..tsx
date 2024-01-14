import ImagePicker from "../../components/imagepicker/imagePicker.tsx";
import {useState} from "react";
import Input, {TextArea, TimeRange} from "../../components/input/input.tsx";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {Backdrop} from "@mui/material";
import { IoArrowBackCircleSharp } from "react-icons/io5";
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
    closeTime: number
}
const CreateMenu = ():JSX.Element => {

    const navigate = useNavigate();
    const [image, setImage] = useState<any>();
    const [foodName, setFoodName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [openTime, setOpenTime] = useState<number>(0);
    const [closeTime, setCloseTime] = useState<number>(0);
    const [open, setOpen] = useState(false);
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
    const clearFields = ():void => {
      setImage(null)
        console.log(image)
        setFoodName("")
    }
    const saveMenu = () => {
        setOpen(true)
        let menu: Menu = {
            image: image,
            foodName: foodName,
            description: description,
            price: price,
            openTime: openTime,
            closeTime: closeTime
        }
                clearFields();
        axios.post("http://localhost:8080/api/v1/menu/save", menu)
            .then(r => {
                setOpen(false);
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Menu created successfully!"
                });
                navigate('/my-menu');
            })
            .catch(e => {
                setOpen(false);
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }

  return (
      <section className={"p-10 mx-32 border rounded shadow my-2 font-bold"}>
              <div className={"flex m-2"}>
                <IoArrowBackCircleSharp className={"text-[var(--primary-color)] text-5xl hover:text-rose-700 m-2"}/><br/>
                <h1 className={"text-3xl font-agbalumo w-full text-center text-[var(--secondary-color)]"}>Create Menu</h1>
              </div>
          <div className={"flex justify-center"}>
                  <ImagePicker getImage={handleChange}/>
              <div className={"ml-20 w-96"}>
                  <Input handleEvent={handleChange} placeholder={"Food Name"} name={"foodName"} type={"text"}/>
                  <TextArea handleEvent={handleChange} placeholder={"Description"} name={"description"}/><br/>
                  <Input handleEvent={handleChange} placeholder={"Food Price (LKR)"} name={"price"} type={"number"}/>
                  <TimeRange placeholder={"Active"} handleEvent={handleChange}/>
                  <div className={"text-right"}>
                      <button
                          className={"bg-blue-600 text-white font-bold px-4 py-1 text-xl m-2 rounded hover:bg-blue-800 "}
                          onClick={saveMenu}
                      >Save</button>
                  </div>
                  <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={open}
                  >
                      <CircularProgress color="inherit" />
                  </Backdrop>
              </div>

          </div>
      </section>
  )
}
export default CreateMenu;

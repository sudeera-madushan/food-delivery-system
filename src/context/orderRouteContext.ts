import { createContext } from 'react';
import {Menu} from "../view/menuList.tsx";

// Define the context
const ParentContext = createContext({
    parentValue: 0,
    updateParentValue: (value:number) => {
        this.parentValue=value;
    },
});

export default ParentContext;

export const BackdropContext = createContext({
    updateBackdropValue: (value: boolean) => {
        this.backdropValue = value;
    },
    backdropValue: false
})

export interface Item{
    menu:any;
    qty: number,
    price: number
}

export const CartContext  = createContext<Item[]>([])

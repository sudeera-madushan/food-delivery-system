import { createContext } from 'react';

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

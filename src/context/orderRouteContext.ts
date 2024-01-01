import { createContext } from 'react';

// Define the context
const ParentContext = createContext({
    parentValue: 0,
    updateParentValue: () => {},
});

export default ParentContext;
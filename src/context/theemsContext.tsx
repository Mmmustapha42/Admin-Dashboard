import { createContext, ReactElement } from "react";
import { theemContext } from "../Interface/Index";

export const ColorModeContext = createContext<theemContext|null>(null);
export const TheemProvider = ({children}:{[key:string]:ReactElement})=>{

    return (
    <ColorModeContext.Provider value={{
        // colors:[]
    }}>
    {children}
    </ColorModeContext.Provider>
    )
}

  
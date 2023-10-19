import Child from "./child";
import { createContext, useState } from "react";
export const Mycontxt=createContext({});
const Parent=()=>
{

    let obj={a:5,b:10,c:2}

    

    const [pcount,psetcount]=useState(1);

    const pinc=()=>
    {
        psetcount(pcount+1)
    }

    const pdec=()=>
    {
        psetcount(pcount-1)
    }


    return(
        <>
        <Mycontxt.Provider value={{pinc,pdec,id:15,obj}}>
        <div>Use context parent</div>
        <div>count:{pcount}</div>
        --------------------------
        <Child/>
        
        </Mycontxt.Provider>
        </>
    )
}
export default Parent;
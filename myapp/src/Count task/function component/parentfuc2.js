import { useState } from "react";
import Secondchildfunc from "./childfunc2";

const Secondparentfun =()=>
{
    const [num,xyz]=useState(0)

    const inc =()=>
    {
        xyz(num+7)
    }

    return(
        <>
        <div className="white1">
        <div><button onClick={inc}>Incrementor (7)</button></div>
        </div>
        <br></br>
        <Secondchildfunc data={num}/>
        </>
    )
}
export default Secondparentfun;
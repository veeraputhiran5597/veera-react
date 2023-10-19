import { useState } from "react";
import Secondgrandchildfun from "./grandchildfunc2";

const Secondchildfunc =(props)=>
{
    const [num,xyz]=useState(10)

    const inc=()=>
    {
        xyz(num+1)
    }

    const dec =()=>
    {
        xyz(num-1)
    }

    const dec1=()=>
    {
       xyz(num-5)
    }

    return(
        <>
        <div className="white2">
        <div>count:{num +props.data} <br></br><button onClick={inc}>+
        </button>  <button onClick={dec}>-</button></div>
        </div>
        <br></br>
        <Secondgrandchildfun dec={dec1}/>
        </>
    )
}
export default Secondchildfunc;
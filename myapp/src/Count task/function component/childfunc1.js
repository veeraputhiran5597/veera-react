import { useState } from "react";
import Firstgrandchild from "./grandchild1fun";

const Firstchildfun =(props)=>
{

    const [num,xyz]=useState(100);

    const inc =()=>
    {
        xyz(num+4)
    }

    const dec=()=>
    {
        xyz(num-3)
    }

    return(
        <>
        <div className={num%2==0 && num%-2==0? "firstfn3col":"firstfn4col"}>
        <div>count: {num} <br></br><button onClick={inc}>+
        </button>  <button onClick={dec}>-</button></div>
        </div>
        <br></br>
        <Firstgrandchild Firstparentdata={props.Firstparentdata} Firstchilddata={num%2==0 && num%-2==0? "firstfn3col":"firstfn4col"}/>
        </>
    )
}
export default Firstchildfun;
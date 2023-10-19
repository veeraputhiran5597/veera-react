import { useState } from "react";
import Thirdchildfunc from "./childfunc3";
const Thirdparentfunc =()=>
{
    const [num,xyz] =useState(9);
    const[num1,xyz1]=useState(0);

    const inc=()=>
    {
        xyz(num+3)
    }

    const dec=()=>
    {
        xyz(num-2)
    }

    const myfn=(call)=>
    {
        xyz1(call);
                
    }


    return(
        <>
        <div className={num1>110 ? "violet" : num1<100 ?"yellow3" : "white3"}>
        <div>count: {num} <br></br><button onClick={inc}>+
        </button> <button onClick={dec}>-</button></div>
        </div>
        <br></br>
        <Thirdchildfunc mydata={myfn} bluecl={num}/>
        </>
    )
}
export default Thirdparentfunc;
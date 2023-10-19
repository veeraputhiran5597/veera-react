import { useState } from "react";
import Firstchildfun from "./childfunc1";

const Firstparentfnc=()=>
{
    const [num, xyz] = useState(1);

    const inc = ()=>
    {
        xyz(num+1);
    }
    
    const dec = ()=>
    {
        xyz(num-1);
    }
    
return(
        <>
        <div className={num%2==0 && num%-2==0? "firstfn1col":"firstfn2col"}>
        <div>count:{num} <br></br><button onClick={inc}>+
        </button>  <button onClick={dec}>-</button></div>
        </div>
        <br></br>
        <Firstchildfun Firstparentdata={num%2==0 && num%-2==0? "firstfn1col":"firstfn2col"}/>
        </>
    )
}
export default Firstparentfnc;
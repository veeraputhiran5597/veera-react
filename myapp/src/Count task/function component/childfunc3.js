import { useState } from "react";
const Thirdchildfunc =(props)=>
{
    const [num,xyz] =useState(100);

    {props.mydata(num)}

    const inc=()=>
    {
        
        xyz(num+5)
        
    }

    const dec=()=>
    {
        
        xyz(num-5)
        
    }

    

    return(
        <>
        <div className={props.bluecl %5 ==0?"child3la3":num%2==0 && num%-2==0? "firstfn2col":"firstfn1col"}>
        <div>count: {num} <br></br><button onClick={inc}>+
        </button> <button onClick={dec}>-</button></div>
        </div>
        </>
    )
}
export default Thirdchildfunc;


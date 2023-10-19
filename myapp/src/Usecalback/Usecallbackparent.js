import { useCallback, useState } from "react";
import Usecallbackchild from "./Usecallbackchild";
const Usecallbackparent=()=>
{
    const[count1,updcount1]=useState(10)

    const [count2,updcount2]=useState(55)

    const upd1=useCallback(
        ()=>{
            updcount1(count1+1)
        },[count1])

    const upd2=()=>
    {
        updcount2(count2-5)
    }
    
    return(
        <>
        <div>Parent Component</div>
        <div>count1: {count1} <button onClick={upd1}>+</button></div>
        <div>count2: {count2} <button onClick={upd2}>-</button></div>
        <Usecallbackchild upd1={upd1}/>
        </>
    )
}
export default Usecallbackparent;
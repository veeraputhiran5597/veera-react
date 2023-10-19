import { useState } from "react";

const Controlled=()=>
{
    const[inval,upval]=useState()

    const Changeip=(event)=>
    {
        upval(event.target.value)
    }

    return(
        <>
        <div>Controlled Component</div>
        <input value={inval} onChange={Changeip}/>{inval}
        </>
    )
}
export default Controlled;
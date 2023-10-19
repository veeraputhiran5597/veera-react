import React from "react";
const Usecallbackchild=(props)=>
{
    console.log("rendereeeeeeeeee")
    return(
        <>
        <div>------------------------------------</div>
        <div>child Component</div>
        <div>Function from parent</div>
        <button onClick={props.upd1}>+</button>
        </>
    )
}
export default React.memo(Usecallbackchild);
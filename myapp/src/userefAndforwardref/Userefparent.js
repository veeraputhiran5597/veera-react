import { useRef } from "react";
import Forwardrefchild from "./forwardrefchild";
const Userefparent =()=>
{

    const Mychildref=useRef()

   

    const Parentclick=()=>
    {
        Mychildref.current.dec();
    }

    const Incment=()=>
    {
        Mychildref.current.inc();
    }

    const Parentmul=()=>
    {
        Mychildref.current.mul();
    }

    const Parentdiv=()=>
    {
        Mychildref.current.mydiv();
    }

      

    return(
        <>
        <div>Parent Funcomp</div>
        <button style={{padding:5,marginLeft:5}} onClick={Parentclick}>-
        </button> <button style={{padding:5}} onClick={Incment}>+
        </button> <button style={{padding:5}} onClick={Parentmul}>*
        </button> <button style={{padding:5}} onClick={Parentdiv}>/</button>
        <div>****************************************</div>
        <Forwardrefchild ref={Mychildref}/>
        </>
    )
}
export default Userefparent;
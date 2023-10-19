import { Mycontxt } from "./parent";
import { useContext } from "react";
const Grchild=()=>
{
    const resval=useContext(Mycontxt);
    return(
        <>

        <div>Use context GRchild</div>
        <button onClick={resval.pinc}>+
        </button> <button onClick={resval.pdec}>-</button>
        <div>ID:{resval.id}</div>
        <div>OBJ:{resval.obj.b}</div>
        
        </>
    )
}
export default Grchild;
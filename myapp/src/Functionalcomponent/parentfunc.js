import React,{useState,memo} from "react";
import Chaildfunc from "./childfunc";


const ParentFunc = () =>
{
    const [num,xyz]=useState(1);

    const incre =()=>
    {
        xyz(num+1);
    }
    return(
        <>
        <div>parent functional component</div>
        <div>count:{num}<button onClick={incre}>+</button></div>
        <h5>First child function component</h5>
        <Chaildfunc data={5} area={'chennai'}/>
        </>
    )
}
export default memo(ParentFunc);
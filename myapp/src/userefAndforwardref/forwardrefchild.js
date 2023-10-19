import { useImperativeHandle, useState,forwardRef } from "react";

const Forwardrefchild =(props,ref)=>
{
    const[num,predefine]=useState(100)

    useImperativeHandle(ref,()=>{
        return{dec,inc,mul,mydiv}
    })

    const inc =()=>
    {
        predefine(num+4)
    }

    const dec =()=>
    {
        predefine(num-3)
    }

    const mul=()=>
    {
        predefine(num*5)
    }

    const mydiv=()=>
    {
        predefine(num/5)
    }

    return(
        <>
        <div>Child Funcomp</div>
        <br/>
        <div>
            Count : {num}
            
            <button style={{padding:5,marginLeft:5}} onClick={inc}> +
            </button> <button style={{padding:5}} onClick={dec}> - </button>
        </div>
        </>
    )
}
export default forwardRef(Forwardrefchild);
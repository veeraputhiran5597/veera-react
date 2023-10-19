import React, { useEffect, useState } from "react";

const Firstgrandchild =(props)=>
{

    const [num,xyz] =useState(50);
    const [color,mycl] =useState("firstfn6col");



    const inc=()=>
    {
        xyz(num+5)
    }

    const dec=()=>
    {
        xyz(num-2)
    }

    useEffect(() => {
      if(props.Firstparentdata=="firstfn1col" && props.Firstchilddata=="firstfn4col")
       { const timer = setTimeout(() => {
          mycl("firstfn5col")
        }, 1800);
        return () => clearTimeout(timer);}

        else{

            const timer = setTimeout(() => {
                mycl("firstfn6col")
              }, 1);
              return () => clearTimeout(timer);
    }

      }, [props]);

    return(
        <>
        <div className={color}>
        <div>count: {num} <br></br><button onClick={inc}>+
        </button> <button onClick={dec}>-</button></div>
        </div>
        </>
    )
}
export default Firstgrandchild;
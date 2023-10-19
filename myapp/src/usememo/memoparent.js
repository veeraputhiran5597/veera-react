import { useMemo, useState } from "react";


const Memoparent=()=>
{
    const [myip,upip]=useState('')

    const changevalue=(event)=>
    {
        upip(event.target.value)
    }

    const binddoble=useMemo(()=>{
        let time=new Date().getTime();
        let val=0;
        while(val<3){
            val=((new Date().getTime()) - time) / 1000;
        }
        return myip*2
    },[myip])

    return(
        <>
        <div>UseMemo Hook</div>
        <input value={myip} onChange={changevalue}/>{binddoble}
        </>
    )
}

export default Memoparent;
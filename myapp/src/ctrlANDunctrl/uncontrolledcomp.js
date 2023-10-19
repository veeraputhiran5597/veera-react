import { useRef, useState } from "react";

const Uncontroll=()=>
{

    const [Indata,Preindata]=useState('');

    const Mytextref=useRef();

    const Printer=()=>{
        var x =document.getElementById('myIp');//ithu theva illa input tag la irruka ref={Mytextref} value va pass panirum
        Preindata(Mytextref.current.value) // mela irruka var x pathila tha Mytextref kutukurom
    }


    return(
        <>
        <div>Uncontroll Component</div>
        <input id="myIp" ref={Mytextref} />
        <button onClick={Printer}>Print Me</button>{Indata}
        </>
    )
}
export default Uncontroll;
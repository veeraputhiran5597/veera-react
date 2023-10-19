import { useNavigate } from "react-router-dom";
import "./myhomepage.css";

const Myhome =()=>
{
    const navi=useNavigate()

//part one

    const firstBtn=()=>
    {
        navi('/workout')
    }

    const firstTaskBtn=()=>
    {
        navi("/count task")
    }
    
    const secBtn=()=>
    {
        navi("/Myfirstpath")
    }

    const thirBtn=()=>
    {
        navi("/My2ndpath")
    }

    const fourBtn=()=>
    {
        navi("/http")
    }

//part 2

    const fiveBtn=()=>
    {
        navi("/usecontextpath")
    }

    const sixBtn=()=>
    {
        navi("/mytable")
    }

    const sevenBtn=()=>
    {
        navi("/Useref")
    }

    const eightBtn=()=>
    {
        navi("/Usecallback")
    }
   
    
    const nineBtn=()=>
    {
        navi("/W3corse")
    }

    
    return(
        <>
        <div className="head">
        <h1 className="headname">My workouts:</h1>
        </div>
        <div className="Body"> 
        
        <div className="part">
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={firstBtn} className="Mybtn" >Basic workouts</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={firstTaskBtn} className="Mybtn">Count Color Change</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={secBtn} className="Mybtn">UpdateDummy1</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={thirBtn} className="Mybtn">UpdateDummy2</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={fourBtn} className="Mybtn">http</button>
        </div>
        </div>

        <div className="part">
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={fiveBtn} className="Mybtn">Usecontext</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={sixBtn} className="Mybtn">Table with Data</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={sevenBtn} className="Mybtn">UseRef Hook</button>
        </div>
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={eightBtn} className="Mybtn">Usecallback Hook</button>
        </div>
        </div>

        <div className="part">        
        <div style={{marginLeft:10,marginRight:10}}>
        <button onClick={nineBtn} className="Mybtn">W3 course</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Myhome;
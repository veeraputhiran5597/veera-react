import React from "react";
import Childsec from "./childsec";
class parentsec extends React.Component
{

    state={num:0}

    inc=()=>
    {
        this.setState({
            num:this.state.num+7
          },()=>{
            console.log(this.state.num)
        })
    }


    render()
    {
        return(
            <>
            <div className="white1"><button onClick={this.inc}>incrementor  ( 7 )</button></div>
            <br></br>
            <Childsec incrementor={this.state.num}/>
            </>
        )
    }
}
export default parentsec;
import React from "react";
import Childthird from "./child3";

class parntthird extends React.Component
{
    state={
        num:9,
        num1:100
       
    }

   inc=()=>{
        this.setState(
           { num:this.state.num+3},
           ()=>
           {
            console.log(this.state.num)
           }
        )}

    dec=()=>{
        this.setState(
            {num:this.state.num-2},
            ()=>
            {
            console.log(this.state.num)  
            }
        )
    }

    myfn=(call)=>
    {
        this.setState(
            {num1:call},
            ()=>
            {
            console.log(this.state.num1)  
            }
        )
    }


    render()
    {
        return(
            <>
            <div className={this.state.num1>110 ? "violet": this.state.num1<100?"yellow3": "white3"}>Count: {this.state.num}<br></br>
            <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
            <br></br>
            <Childthird childnum={this.myfn}  bluefn={this.state.num} />
            </>
        )
    }

}
export default parntthird;
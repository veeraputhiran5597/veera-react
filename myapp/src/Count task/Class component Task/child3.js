import React from "react";

class childthird extends React.Component
{
    state={
        num:100
        
    }

   inc=()=>{
        this.setState(
           { num:this.state.num+5},
           ()=>
           {
            console.log(this.state.num)
            this.props.childnum(this.state.num)
           }
        )}

    dec=()=>{
        this.setState(
            {num:this.state.num-5},
            ()=>
            {
            console.log(this.state.num)
            this.props.childnum(this.state.num)  
            }
        )
    }
    render()
    {
    return(
    <>
    <div className={this.props.bluefn %5==0 ? "child3la3": this.state.num%2==0 && this.state.num%-2==0 ?
    "child3la1":"child3la2"}>Count: {this.state.num}<br></br>
    <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
    </>
    )
    }

}
export default childthird;
import React from "react";
import Grndchildsec from "./grndchildsec";
class childsec extends React.Component
{

    state={num:10}

    inc = () =>{
        this.setState({
          num:this.state.num+1
        },()=>{
          console.log(this.state.num)
        })
      }

    
      dec = () =>{
        this.setState({
          num:this.state.num-1
        },()=>{
          console.log(this.state.num)
        })
      }

      myMethod=(recvalue)=>
    {
      this.setState({
        num:this.state.num-recvalue
      },()=>{
        console.log(this.state.num)
      })
        
    }

render()
{
return(
      <>
      <div className="white2">Count:{this.state.num+this.props.incrementor}<br></br>
      <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
      <br></br>
      <Grndchildsec dec={this.myMethod}/>
      </>
        )
    }
}
export default childsec;
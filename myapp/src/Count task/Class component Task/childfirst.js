import React from "react";
import Grndchildfir from "./grndchildfir";
 class childfirst extends React.Component{

    state={
        num:100
    }

    inc = () =>{
        this.setState({
          num:this.state.num+4
        },()=>{
          console.log(this.state.num)
        })
      }
    
      dec = () =>{
        this.setState({
          num:this.state.num-3
        },()=>{
          console.log(this.state.num)
        })
      }

  render(){
    return(
        <>
        <div className={this.state.num %2===0 &&this.state.num %-2===0?"second1":"second2"}>
        <div> count: {this.state.num}<br></br>
        <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
        </div>
        <br></br>
        <Grndchildfir parntcon={this.props.parntcon} childcon={this.state.num %2==0 && this.state.num %-2==0?"second1":"second2"}/>
        </>
      
    )
  }

 }
 export default childfirst;
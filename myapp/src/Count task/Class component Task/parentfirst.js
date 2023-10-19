import React from "react";
import Childfirst from "./childfirst";
 class parentfirst extends React.Component{

    state={
        num:1
    }

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

      
      

  render(){
    return(
        <>
        <div className={this.state.num %2===0 &&this.state.num %-2===0?"first1":"first2"}>  
        <div> count: {this.state.num}<br></br>
        <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
        </div>
        <br></br>
        <Childfirst parntcon={this.state.num %2==0 &&this.state.num %-2==0?"first1":"first2"}/>
        
        </>
      
    )
  }

 }
 export default parentfirst;
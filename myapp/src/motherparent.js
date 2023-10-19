import React from "react";
import Parent from "./parent";
import Lifecycle from "./Lifecomponent";
import ParentFunc from "./Functionalcomponent/parentfunc";
import Dummy1 from "./HOC/Dummy1";
import Dummy2 from "./HOC/dummy2";




class Motherparent extends React.Component{
  
  state={
    num:1,
    togleflag:false
  }

  incrementor = () =>{
    this.setState({
      num:this.state.num+1
    },()=>{
      console.log(this.state.num)
    })
  }

  decrement = () =>{
    this.setState({
      num:this.state.num-1
    },()=>{
      console.log(this.state.num)
    })
  }
  togglediv=()=>{
    this.setState({
      togleflag:!this.state.togleflag
    })
  }


  render(){
    return(
      <>
        {/* <div>
        <Dummy1 data={5}/>
        <Dummy2/>
        </div>
   */}  
        <div style={{backgroundColor:"red"}}>
        <h5>App Component</h5>
        <div>count: {this.state.num} <br></br><button onClick={this.incrementor}>+
        </button> <button onClick={this.decrement}>-</button></div>
        </div>
        
        <div>
        <div style={{backgroundColor:"yellow"}} >
        <h5>First parent class component</h5>
        <Parent/></div>
        </div>
        <br></br>
       
        <div style={{backgroundColor:"green"}}>
        <div>Toggle</div>
        <button onClick={this.togglediv}>Toggle div</button>
        {this.state.togleflag && <Lifecycle/>}
        </div>

        <div style={{backgroundColor:"violet"}}>
        <h3>Function component intro</h3>
        <ParentFunc/>
        </div>    
        
      </>
     
    )
  }

}
export default Motherparent;
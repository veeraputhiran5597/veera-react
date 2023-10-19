import React,{Component}from "react";
import Child from "./child";

class Parent extends Component
{
    state={
        numb:0
    }

    decrement = () =>{
        if(this.state.numb>-10)
        {
        this.setState({
          numb:this.state.numb-1
        },()=>{
          console.log(this.state.numb)
        })
        }
        else
        {
            alert('this is min value')
        }
        }

    incrementor = () =>{
        if(this.state.numb<10)
        {
        this.setState({
          numb:this.state.numb+1
        },()=>{
          console.log(this.state.numb)
        })
        }
        else
        {
            alert('this is max value')
        }
        }
    
   myMethod=(recvalue)=>
    {
        alert(recvalue);
    }


    render()
    {
        return(
            <>
            <div>Parent</div>
            <div>count: {this.state.numb}</div>
            <button onClick={this.incrementor}>+</button>
            <Child min={this.decrement}data={5} area={'chennai'} parentmethod={this.myMethod} />
            </>
        );
    }
}
export default Parent;

import React from "react";

class Child extends React.PureComponent
{

    onBtnClick= () =>{
        this.props.parentmethod('hello from chennai child....')
    }
    
    
   

    render()
    {
        return(
            <>
            <button onClick={this.props.min}>-</button>
            <h5>First child class component</h5>
            <div>Child</div>
            <div>{this.props.data} {this.props.area}</div>
            <button onClick={this.onBtnClick}>Click me</button>
          
            </>
        );
    }
}
export default Child;
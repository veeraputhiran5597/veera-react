import React from "react";

 class grndchildfir extends React.Component{

    state={
        num:50,
        color:"thirdbox2"
    }

    inc = () =>{
        this.setState({
          num:this.state.num+5
        },()=>{
          console.log(this.state.num)
        })
      }
    
      dec = () =>{
        this.setState({
          num:this.state.num-2
        },()=>{
          console.log(this.state.num)
        })
      }

componentDidUpdate(){

if(this.props.parntcon === "first1" && this.props.childcon ==="second2")
  {
    this.mytime = setTimeout(() => {
      
      this.setState({
            color:"thirdbox1",
        });
    }, 1800);
    return () =>clearTimeout(this.mytime)

}

else
{
  this.mytime = setTimeout(() => {
      
    this.setState({
          color:"thirdbox2",
      });
  },);

  return () =>clearTimeout(this.mytime)
  
}
}
render(){
    return(
        <>
        <div className={this.state.color}>
        <div> count: {this.state.num}<br></br>
        <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button></div>
        </div>
        </>
      
    )
  }

 }
 export default grndchildfir;
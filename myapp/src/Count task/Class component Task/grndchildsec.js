import React from "react";
class grndchildsec extends React.Component
{

state={num:0}

onbtn = () =>{

this.props.dec(this.state.num+5)
}
        

render()

{
  return(
  <>
  <div className="white1"><button onClick={this.onbtn}>decrementor ( 5 )</button></div>
            
  </>
  )
}
}
export default grndchildsec;
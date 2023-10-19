import React from "react";
import "./Taskcount.css";
import Parentfirst from "./Class component Task/parentfirst";
import Parentsec from "./Class component Task/parentsec"
import Parntthird from "./Class component Task/parent3";
import Firstparentfnc from "./function component/parentfunc1";
import Secondparentfun from "./function component/parentfuc2";
import Thirdparentfunc from "./function component/parentfun3";
 class Taskapp extends React.Component{

  render(){
    return(
      <>
      <div>Class Component</div>
      <br></br>
      <div className="mycomponent">      
      <br></br>
      <div className="firstcomponent">
      <Parentfirst/>
      </div>
      <br></br>
      <div className="firstcomponent">
      <Parentsec/>
      </div>
      <br></br>
      <div className="firstcomponent">
      <Parntthird/>
      </div>
      </div>
      <br></br>
      <div>Function Component</div>
      <br></br>
      <div className="mycomponent">
      <br></br>
      <div className="firstcomponent">
      <Firstparentfnc/>
      </div>
      <br></br>
      <div className="firstcomponent">
      <Secondparentfun/>
      </div>
      <br></br>
      <div className="firstcomponent">
      <Thirdparentfunc/>
      </div>
      </div>
      </>
    )
  }

 }
 export default Taskapp;
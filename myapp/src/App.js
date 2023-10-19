import React from "react";
import Motherparent from "./motherparent";
import { UpdateDummy1,UpdateDummy2 } from "./HOC/myHOC";
import Parent from "./Usecontext/parent";
import Myhome from "./myhomepage";
import Httpcomp from "./Httpcompo/httpcom";
import Tabledata from "./createtable/Mytable";
import Userefparent from "./userefAndforwardref/Userefparent";
import Uncontroll from "./ctrlANDunctrl/uncontrolledcomp";
import Controlled from "./ctrlANDunctrl/controlledcomp";
import Usecallbackparent from "./Usecalback/Usecallbackparent";
import Bodycomp from "./W3model/Bodycomp";
import Taskapp from "./Count task/Taskapp";
import Usecustomhook from "./customHook/usecustomhook";
import Memoparent from "./usememo/memoparent";
import Offerpage from "./project/offerpage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


class App extends React.Component{
  routedata=[
    {
      path:"/Myfirstpath",
      element:<UpdateDummy1/>
    },
    {
      path:"/My2ndpath",
      element:<UpdateDummy2/>

    },
    {
      path:"/usecontextpath",
      element:<Parent/>
    },
    {
      path:'/workout',
      element:<Motherparent/>
    },
    {
      path:"/",
      element:<Myhome/>
    },
    {
      path:"/http",
      element:<Httpcomp/>
    },
    {
      path:"/mytable",
      element:<Tabledata/>
    },
    {
      path:"/Useref",
      element:<Userefparent/>
    },
    {
      path:"/Unctrl",
      element:<Uncontroll/>
    },
    {
      path:"/ctrl",
      element:<Controlled/>
    },
    {
      path:"/Usecallback",
      element:<Usecallbackparent/>
    },
    {
      path:"/W3corse",
      element:<Bodycomp/>
    },
    {
      path:"/count task",
      element:<Taskapp/>
    },
    {
      path:"/myhook",
      element:<Usecustomhook/>
    },
    {
      path:"/usememo",
      element:<Memoparent/>
    },
    {
      path:"/swiggy",
      element:<Offerpage/>
    }
    
        

  ];
  myRoute=createBrowserRouter(this.routedata); 
render(){
    return(
      <>
      <RouterProvider router={this.myRoute}/>
      </>
    )
  }
}
export default App;
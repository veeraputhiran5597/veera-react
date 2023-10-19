import { useState } from "react";
import "./tablecss.css";
const Tabledata=()=>
{
    let[array,setArray]=useState([])
    
    let[inputdata,setInputdata]= useState({name:"",area:"",gender:""})

    let[index,setIndex]=useState()

    let[bolin,setBolin]=useState(false)

    let{name,area,gender}=inputdata;
   
    // console.log({name,area,gender})




    function data(event){
        setInputdata({...inputdata,[event.target.name]:event.target.value})
    }

          
    function adddatas()
    {
      if(name==="" && area==="" && gender==="")
        {
            alert("Please Enter The All value")
        }
        else if(name==="")
        {
          alert("Please Enter Name")
        }
        else if(area==="")
        {
          alert("Please Enter Area")
        }
        else if(gender==="")
        {
          alert("Please Enter Genter")
        }
        else
        {
          
          const Samedata = array.find(
            repeat => repeat.name === name && repeat.area === area && repeat.gender === gender
           );

           if(Samedata)
           {
              alert("Alredy enter this value")
           }
           else{
           setArray([...array,{name,area,gender}])
          // console.log(inputdata)
          setInputdata({name:"",area:"",gender:""})
           } 
              
       }

       
}
      
    
   //console.log("total arr",array)


//Delete function

   function Deletedata(i){
    //console.log(i,"dele index")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

   }

//Edit function

    function Editdata(i)
    {
       document.getElementById("Editfocus").focus();
        let {name,area,gender} =array[i] // this for perticuler index no row data shoud be update
        setInputdata({name,area,gender})
        setBolin(true)
        setIndex(i)
    }  


//how to add at particuler index update in on that index
 function updateinfo()
 {
  if(name==="" || area==="" || gender==="")
  {
    alert("Please Enter the value")
  }
  else{

    const Samedata = array.find(
      repeat => repeat.name === name && repeat.area === area && repeat.gender === gender
     );


    if(Samedata)
           {
              alert("Alredy enter this value")
           }
           else{
    let total=[...array]
    total.splice(index,1,{name,area,gender})
    setArray(total)
    setBolin(false)
    setInputdata({name:"",area:"",gender:""}) }
  }
 }

   const Mytable=()=>
   {
    return(
        <>
        <h3>Table:</h3>
        <br/>
        <div style={{display:"flex",textAlign:"center" }}>
          <div className="mycell">Full Name</div> 
          <div className="mycell">Area</div>
          <div className="mycell">Gender</div> 
          <div className="mycell">Action</div>
         </div>
         {Bindtable()}
         </>
    )
   }

   const Bindtable =()=>{
    return array && array.map((ele,ind)=>{
    return(
        <div key={"mytbl" +ind} style={{display:"flex",textAlign:"center"}}>
          <div className="mycell">{ele.name}</div> 
          <div className="mycell">{ele.area}</div>
          <div className="mycell">{ele.gender}</div> 
          <div className="mycell">
            <button onClick={()=>Editdata(ind)} className="btndis">Edit
            </button> <button onClick={()=>Deletedata(ind)} className="btndis">Delete</button>
          </div>
        </div>
    )
    })
   }

   

    return(
        <>
        <div style={{display:"flex"}} >
        <div className="formcss">
        <h3>Form:</h3>
        <br/>
        <p>Name:</p>
        <input type="text" value={inputdata.name} autofocus="autofocus" id="Editfocus" name="name" autoComplete="off" onChange={data}/>
        <br/><br/>
        <p>Area:</p>
        <input type="text" value={inputdata.area} name="area" autoComplete="off" onChange={data}/>
        <br/><br/>
        <p>Gender:</p>
        <input type="text" value={inputdata.gender} name="gender" autoComplete="off" onChange={data}/>
        <br/><br/>
        <button onClick={!bolin?adddatas:updateinfo} className="btndis">{!bolin?"Submit":"Edit data"}</button>
        </div>
        
        <div className="tablecss">                
        {array.length>0 && Mytable()}
        </div>
        </div>
        </>
    )
   
}

export default Tabledata;
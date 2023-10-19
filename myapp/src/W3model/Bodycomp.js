import { useState } from "react";
import "./W3model.css";
const Bodycomp=()=>
{

    const array=[{Name:"HTML",Amount:3000},{Name:"CSS",Amount:2000},{Name:"Javascript",Amount:7000},
    {Name:"Python",Amount:5000},{Name:"SQL",Amount:4000}]

    const[Temarray,Setarray]=useState([])
    
    
//console.log(Temarray)
//const uniqueObjects = [...new Map(Temarray.map(item => [item.Name, item])).values()]
// console.log(uniqueObjects)
  

   const Htmladd=()=>
   {
    if(Temarray.some((course)=>course.Name==="HTML"))
    {
        alert("HTML Course Alredy Added")
    }
    else
    {
       Setarray([...Temarray,array[0]])
    }
   }
    
   
   
   const Cssadd=()=>
   {
    if(Temarray.some((course)=>course.Name==="CSS"))
    {
        alert("CSS Course Alredy Added")
    }
    else
    {
        Setarray([...Temarray,array[1]])
    }        
   }

   const JavaScriptAdd=()=>
   {
    if(Temarray.some((course)=>course.Name==="Javascript"))
    {
        alert("Javascript Course Alredy Added")
    }
    else
    {
        Setarray([...Temarray,array[2]])
    }       
   }
   
   const Pythonadd=()=>
   {
    if(Temarray.some((course)=>course.Name==="Python"))
    {
        alert("Python Course Alredy Added")
    }
    else
    {
     Setarray([...Temarray,array[3]])   
    }
   }

   const SQLadd=()=>
   {    
    if(Temarray.some((course)=>course.Name==="SQL"))
    {
        alert("SQL Course Alredy Added")
    }
    else
    {
    Setarray([...Temarray,array[4]])
    }
   }

   const Htmlremove=()=>
   { 
        Setarray(Temarray.filter(course=>course.Name!=="HTML"))

   }
   
   const CSSremove=()=>
   { 
        Setarray(Temarray.filter(course=>course.Name!=="CSS"))

   }

   const JSremove=()=>
   { 
        Setarray(Temarray.filter(course=>course.Name!=="Javascript"))

   }

   const Pythonremove=()=>
   { 
        Setarray(Temarray.filter(course=>course.Name!=="Python"))

   }
   
   const SQLremove=()=>
   {

    Setarray(Temarray.filter(course=>course.Name!=="SQL"))

   }



  
   const Maifu=(i)=>{
    let total=[...Temarray]
   total.splice(i,1)
   Setarray(total)
   }

    const Htmlfunc=()=>
    {
        return(
            <>
            <div className="Boby">
            
            <div className="Htmllfirstpart">
                <div className="Htmlletter">HTML</div>
                <br/>
                <p style={{fontSize:13}}>The language for building web pages</p>
                <br/>
                <button className="AddhtmlBtn" onClick={Htmladd}>Add HTML</button>
                <br/>
                <br/>
                <button className="RemhtmlBtn" onClick={Htmlremove}>Remove HTML</button>
            </div>

            <div className="Htmlsecondpart">
                
               <div className="Exaplebox">HTML Example:

               <div className="Exapleboxinside"></div>
                
               <button className="TryBtn">Try It Yourself</button>
               
               </div>
            </div>
            </div>
            </>
        )
    }
    
    const Cssfunc=()=>
    {
        return(
            <>
            <div className="Boby" style={{backgroundColor:"#FFF4A3"}}>
            
            <div className="Htmllfirstpart">
                <div className="Htmlletter">CSS</div>
                <br/>
                <p style={{fontSize:13}}>The language for styling web pages</p>
                <br/>
                <button className="AddhtmlBtn" onClick={Cssadd}>Add CSS</button>
                <br/>
                <br/>
                <button className="RemhtmlBtn" style={{backgroundColor:"black",color:"white"}} onClick={CSSremove} >Remove CSS</button>
            </div>

            <div className="Htmlsecondpart">
                
               <div className="Exaplebox">CSS Example:

               <div className="Exapleboxinside"></div>
                
               <button className="TryBtn">Try It Yourself</button>
               
               </div>
            </div>
            </div>

            </>
        )
    }

    const Javascriptfun=()=>
    {
      return(
        <>
        
        <div className="Boby" style={{backgroundColor:"#282A35",color:"white"}}>
            
            <div className="Htmllfirstpart">
                <div className="Htmlletter">JavaScript</div>
                <br/>
                <p style={{fontSize:13}}>The language for programming web pages</p>
                <br/>
                <button className="AddhtmlBtn" onClick={JavaScriptAdd}>Add JavaScript</button>
                <br/>
                <br/>
                <button className="RemhtmlBtn" style={{backgroundColor:"white",color:"black"}} onClick={JSremove}>Remove JavaScript</button>
            </div>

            <div className="Htmlsecondpart">
                
               <div className="Exaplebox" style={{color:"black"}}>JavaScript Example:

               <div className="Exapleboxinside"></div>
                
               <button className="TryBtn">Try It Yourself</button>
               
               </div>
            </div>
            </div>
            </>
      )
    }


    const Pythonfun=()=>
    {
      return(
        <>
        
        <div className="Boby" style={{backgroundColor:"#F3ECEA"}}>
            
            <div className="Htmllfirstpart">
                <div className="Htmlletter">Python</div>
                <br/>
                <p style={{fontSize:13}}>A popular programming language</p>
                <br/>
                <button className="AddhtmlBtn" onClick={Pythonadd}>Add Python</button>
                <br/>
                <br/>
                <button className="RemhtmlBtn" style={{backgroundColor:"black",color:"white"}} onClick={Pythonremove}>Remove Python</button>
            </div>

            <div className="Htmlsecondpart">
                
               <div className="Exaplebox">Python Example:

               <div className="Exapleboxinside"></div>
                
               <button className="TryBtn">Try It Yourself</button>
               
               </div>
            </div>
            </div>
            </>
      )
    }

    const SQLfun=()=>
    {
      return(
        <>
        
        <div className="Boby" style={{backgroundColor:"#96D4D4"}}>
            
            <div className="Htmllfirstpart">
                <div className="Htmlletter">SQL</div>
                <br/>
                <p style={{fontSize:13}}>A language for accessing databases</p>
                <br/>
                <button className="AddhtmlBtn" onClick={SQLadd}>Add SQL</button>
                <br/>
                <br/>
                <button className="RemhtmlBtn" style={{backgroundColor:"black",color:"white"}} onClick={SQLremove}>Remove SQL</button>
            </div>

            <div className="Htmlsecondpart">
                
               <div className="Exaplebox">SQL Example:

               <div className="Exapleboxinside"></div>
                
               <button className="TryBtn">Try It Yourself</button>
               
               </div>
            </div>
            </div>
            </>
      )
    }



{/*******For table********/}

    const Holltable=()=>
    {
        const Closebtn=()=>
        {
           Setarray([])
        }

        return(
            <>
            <div className="Feesfullbox"><div style={{backgroundColor:"#04AA6D",height:36,padding:5}}>Courses info
        <button style={{float:"right"}} onClick={Closebtn}>
        <img className="Imgcss"  src="data:image/png;base64,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"/></button>
        </div>
        <div className="Corseaddbox">
        <br></br>
        {Hedtable()}
        </div>
        </div>
            
            </>

        )
    }

    const Hedtable=()=>
    {
        
        return(
            <>
            <div className="Headtable">
            <div className="tablelay">Courses</div>
            <div className="tablelay">Amount</div>
            <div className="tablelay">Remove</div>
            </div>
            {Bindtable()}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {Calculations()}
            </>
        )
    }

    
    
    const Bindtable =()=>{
        return Temarray && Temarray.map((ele,ind)=>{
        return(
            <div key={"mytbl" +ind} style={{display:"flex",textAlign:"center"}}>
              <div className="tablelay">{ele.Name}</div> 
              <div className="tablelay">{ele.Amount}</div>
              <div className="tablelay">
                <button onClick={()=>Maifu(ind)}>--</button>
              </div>
            </div>
        )
        })
       }

       const Calculations=()=>
    {
        let Totalamount=0;
        Temarray.forEach((ele)=>{
            Totalamount+=parseInt(ele.Amount)
        })

        let GSTamount=(Totalamount*8)/100
        let Grandtotal=Totalamount+GSTamount
        return(
            <>
            <hr className="linecss"></hr>
            <br/>
            <div >Total :Rs.{Totalamount}</div>
            <br/>
            <div>GST 8% :Rs.{GSTamount}</div>
            <br/>
            <div>GRAND TOTAL :Rs.{Grandtotal}</div>
            </>
        )
    }















    return(
        <>
        <div>
        <div className={Temarray.length>0?"Headtitelsmall":"Headtitel"}>W3 Admition Fees</div> 
        <div style={{display:"flex"}}>
        <div className={Temarray.length>0?"homefirst":"homehide"}>
            {Htmlfunc()}
            {Cssfunc()}
            {Javascriptfun()}
            {Pythonfun()}
            {SQLfun()}
        </div>
        <div className="homesecond">
        {Temarray.length>0&&Holltable()}
        </div>
        </div>
        </div>
        </>
    )
 }

export default Bodycomp;
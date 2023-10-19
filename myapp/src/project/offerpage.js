import { useState,useEffect,useRef} from "react";
import "./offerpage.css";
const Offerpage=()=>
{
    
    
    
    const offHead=()=>
    {
        return(
            <>
            <div className="offernav">
            
            <div className="headitem1">
            <div>
            <img src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" style={{width:28}} />
            </div>

           
            <div className="swiggyletter">Swiggy</div>
            </div>

            <div className="headitem2">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRcotSZQcyC3SCKM0GZ2L4eN6WEdxbwTzWKl_stnzVG3RkAET3" style={{width:50,height:30}} />

            <div className="smallletter">Setup your precise location</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUOiCt4AFQ17wQCtOaJYFTJx6ko9Aq_UYZw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUOiCt4AFQ17wQCtOaJYFTJx6ko9Aq_UYZw&usqp=CAU" style={{width:20,height:20,marginTop:7}}/>
            </div>

            <div className="srchbtndiv">
            <button className="searchbtn"><div className="serchbrletter">Search for restaurant and food</div>
            <div className="searchicon">
            <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" style={{width:20}}/>
            </div>
            </button>
            </div>

            <div className="profilehead">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmZY4cFX8Bbiyiaxx3_7w35A7wg1L9JclSFYtLik&s" style={{width:50}}/>
            </div>

            </div>
            </>
        )
    }
    
    
    
    
    
    
    const offerbar=()=>
    {
        return(
            <>
            <div className="offerpage">
            <div>Home/offers</div>
            <div className="offerline">Restaurants with great offers near me</div>
            <br/>


            <div style={{display:"flex"}}>
            
            <div>
            <button className="filterbtn" onClick={()=>setfilter(true)}  >Filter
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltz752gXYzKrIodHbI_9B0f3W_25ICZDbvg&usqp=CAU" 
             style={{width:18,height:13,marginLeft:7}}   />
            </button>
            </div>
            
            <div>
            
            <button className="sortbybtn" onClick={()=>falsedrop(true)} >Sort By
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jOHG4xs2adnbPhWvXxVZZPF5eN0yMISMJ53hO6Thgg&s"
            style={{width:18,height:13,marginLeft:7}} />
            </button>
            {truedrop && Sortbydrop()}
            </div>

            <div>
            <button className="offerssmallbtn">Offers</button>
            </div>

            <div>
            <button className="fastdeliverybtn" >Fast Delivery</button>
            </div>

            <div>
            <button className="ratingbtn">Ratings 4.0+</button>
            </div>

            <div>
            <button className="pureveg" >Pure Veg</button>
            </div>

            <div>
            <button className="rate1btn">Rs.300 - Rs.600</button>
            </div>

            <div>
            <button className="rate2btn">Less than Rs.300</button>
            </div>

            </div>


            </div>
            </>
        )
    }

    const [filterform,setfilter]=useState(false)

    const Filterbox=()=>
    {
        return(
            <>
            <div className="hoverpage" >


                <div className="hoverheader" >
                   <div className="filterletter"> Filter 
                   <button className="hoverclose" onClick={Hoverclosebtn} >close</button>
                   </div>
                   </div>

                <div className="hover1">
                  
                   <div className="hoverbody">

                    <div className="hoverlistpage">
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(1)} >Sort</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(2)}>Delivery time</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(3)}>Cuisines</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(4)} >Explore</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(5)}>Rating</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(6)}>Veg/Nonveg</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(7)}>Offers</div>
                   <br/>
                   <div className="hoverlist" onClick={()=>prelistcond(8)}>Cost for two</div>
                   <br/>
                   </div>

                   <div>
                    {hoverlistcond === 1 && sorthover()}
                    {hoverlistcond === 2 && Delivertimehover()}
                    {hoverlistcond === 3 && Cuisineshover()}
                    {hoverlistcond === 4 && Explorehover()}
                    {hoverlistcond === 5 && Ratinghover()}
                    {hoverlistcond === 6 && Vegornonveg()}
                    {hoverlistcond === 7 && offerhover()}
                    {hoverlistcond === 8 && Costfortwohover()}
                   </div>

                  </div>

                </div>

            </div>
            </>
        )
    }


//Hover page inside lists onclick


//use state for conditional rendering for hover page



    const Hoverclosebtn=()=>
    {
        setfilter(false)
        prelistcond(1)
    }


   const [hoverlistcond,prelistcond]=useState(1)

   const sorthover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Sort by</div>
        <div style={{display:"grid"}}>
        <br/>
        <div><input type="radio"  />Relevance(Default)</div>
        <br/>
        <div><input type="radio"  />Delivery Time</div>
        <br/>
        <div><input type="radio"  />Rating</div>
        <br/>
        <div><input type="radio"  />Cost:Low to High</div>
        <br/>
        <div><input type="radio"  />Cost:High to Low</div>
        </div>
        </div>
        </>
    )
   }  
    
   const Delivertimehover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter by</div>
        <br/>
        <div><input type="radio"  />Fast Delivery</div>
        </div>
        </>
    )
   }  
    
   const Cuisineshover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter By Cuisines</div>
        <div style={{display:"grid"}}>
        <br/>
        <div><input type="radio"  />Afghani</div>
        <br/>
        <div><input type="radio"  />American</div>
        <br/>
        <div><input type="radio"  />Andhra</div>
        <br/>
        <div><input type="radio"  />Andhra</div>
        <br/>
        <div><input type="radio"  />Arabian</div>   
        </div>
       
        </div>
        </>
    )
   } 

   const Explorehover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter by</div>
        <br/>
        <div><input type="radio"  />New On Swiggy</div>
        <br/>
        <div><input type="radio"  />Swiggy Exclusive</div>
        </div>
        </>
    )
   }  

   const Ratinghover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter by</div>
        <br/>
        <div><input type="radio"  />Rating 4.5+</div>
        <br/>
        <div><input type="radio"  />Rating 4.0+</div>
        <br/>
        <div><input type="radio"  />Rating 3.5+</div>
        </div>
        </>
    )
   }  

   const Vegornonveg=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter by</div>
        <br/>
        <div><input type="radio"  />Pure veg</div>
        <br/>
        <div><input type="radio"  />Pure Non-veg</div>
        </div>
        </>
    )
   } 

   const Costfortwohover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Filter by</div>
        <br/>
        <div><input type="radio"  />Rs. 300-Rs. 600</div>
        <br/>
        <div><input type="radio"  />Greater than Rs. 600</div>
        <br/>
        <div><input type="radio"  />Less than Rs. 300</div>
        </div>
        </>
    )
   }  
   
   
   const offerhover=()=>
   {
    return(
        <>
        <div className="sorthoverpage" >
        <div>Restaurants With</div>
        <br/>
        <div><input type="radio"  />Offers</div>
        </div>
        </>
        )
   }


//sort by btn functions


const [truedrop,falsedrop]=useState(false)

const dropref=useRef()

useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (truedrop && dropref.current && !dropref.current.contains(e.target)) {
        falsedrop(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [truedrop])


const Sortbydrop=()=>
{

   
    

    return(
        <>
        <div class="dropdown-content" ref={dropref}>
        <div className="dropdownbody">
        <br/>

        <div style={{display:"flex"}}><div className="dropdownletters">Relevance<br/>(Default)</div> 
        
        <div className="inputround">
        <input type="radio"  />
        </div>

        </div>
        <br/>

        <div style={{display:"flex"}}><div className="dropdownletters">Delivery Time</div>

        <div className="inputround">
        <input type="radio"  />
        </div>

        </div>
        <br/>
        <div style={{display:"flex"}}><div className="dropdownletters">Rating</div>

        <div className="inputround">
        <input type="radio"  />
        </div>
        
        </div>
        <br/>
        <div style={{display:"flex"}}><div className="dropdownletters">Cost:Low to High</div>

        <div className="inputround">
        <input type="radio"  />
        </div>
        
        </div>
        <br/>
        <div style={{display:"flex"}}><div className="dropdownletters">Cost:High to Low</div>

        <div className="inputround">
        <input type="radio"  />
        </div>

        </div>
        <br/>
        </div>
        <div>
            <div className="dropapplybtn">Apply</div>
        </div>
        </div>
        </>
    )
}

    
    return(
        <>
        <div>
        {offHead()}
        </div>
        <br/>
        <br/>
        <div>
        {offerbar()}
        </div>
        <div>
          {filterform && Filterbox()}  
        </div>
        </>
    )
}
export default Offerpage;
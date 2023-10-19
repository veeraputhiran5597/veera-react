import Dummy1 from "./Dummy1";
import Dummy2 from "./dummy2";

const Newstyle={
    padding:20,
    backgroundColor:'blue',
    marginTop:20,
    border:'10px solid green'
};

const  MyHoc=(Component)=>
{
    return(props)=>{
        return(
            <>
            <div style={Newstyle}><Component{...props}/></div>
            </>
        )
    }
}

export const UpdateDummy1=MyHoc(Dummy1);
export const UpdateDummy2=MyHoc(Dummy2);

export default MyHoc;
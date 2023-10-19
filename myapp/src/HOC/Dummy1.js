import { Link} from "react-router-dom";
const Dummy1=(props)=>
{

    return(
        <>
        <div> Dummy1 component</div>
        <div>props is ... {props.data}</div>
        <Link style={{color:"red"}} to={'/My2ndpath'}>To My2ndpath</Link>
        </>
    )
}
export default Dummy1;
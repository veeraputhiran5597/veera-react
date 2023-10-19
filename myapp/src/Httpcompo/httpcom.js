import axios from 'axios';

const Httpcomp =()=>
{
    const postdata=()=>
    {
        axios.post('https://jsonplaceholder.typicode.com/posts',{name:"veera"}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })    }


     const getdata=()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })    }

        return(
            <>
            <div style={{backgroundColor:"green",padding:10}}>
            <div>Http component</div>
            <button onClick={postdata} style={{backgroundColor:"violet"}}> post client me 
            </button> <button onClick={getdata} style={{backgroundColor:"violet"}}> get client me </button>
            </div>
            </>
        )

}
export default Httpcomp;
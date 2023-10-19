import React,{Component} from "react";

class lifecycle extends Component{
    state={
        cCount:0
    }
    increment=()=>{
        this.setState({cCount:this.state.cCount +1},()=>{console.log(this.state.cCount)})
    }
    componentDidMount(){
        console.log('This is component did mound')
    }
    componentDidUpdate(){
        console.log('This is component did update pandra')
    }
    componentWillUnmount(){
        console.log('this is component will unmount')
    }
    

    
    
render(){
    return(
        <>
        <div>Lifecycle component</div>
        <div>CCount:{this.state.cCount}</div>
        <button onClick={this.increment}> +</button>
        </>
        
    )
}

}
export default lifecycle;
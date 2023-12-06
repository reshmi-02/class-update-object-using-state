import React,{Component} from 'react'

class Classstate extends Component{

    constructor(){
        super()

        this.state={
            name:"reshmi",
            obj:{
                age:20
            }
        }

    }

    render(){

        const changename=()=>{
            this.setState({name:"preeetha"})
        }
        const changeage=()=>{
            // let a={...obj,age:23}
            this.setState({obj:{
                ...this.state.obj,age:23
            }})
        }

        return(
            <div>
                <h3>1.change name</h3>
                <p>{this.state.name}</p>
                <button onClick={changename}>Change name</button>
                <h3>2.change object</h3>
                <p>{this.state.obj.age}</p>
                <button onClick={changeage}>change object</button>
            </div>
        )
    }
}

export default Classstate
import  React, { Component } from  'react';
import ScubaDiveService from "./ScubaDiveService";

const scubaDiveService = new ScubaDiveService();

class ScubaDiveList extends Component{
    state = {
        scubaList: []
    }
    async componentDidMount(){
        const res = await fetch('http://localhost:8000/scuba-dive-data/')
        const data = await res.json();

        // scubaDiveService.getScubaDiveList().then(res => this.setState(
        //     {
        //         scubaList: res.data
        //     }
        // ))
        console.log(data)
    }

    render(){
        return(
            <div>
                <h1>
                    Chao mundo
                </h1>
            </div>
        )
    }
}

export default ScubaDiveList
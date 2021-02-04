import  React, { Component } from  'react';
import scubaDiveService from "../services/ScubaDiveService";



export default class ScubaDiveSave extends Component{
    
    state = {
        scubaDiveService: new scubaDiveService(),
        scubaList: [],
        actionSuccess: false,
        max_depth: "",
        time_bellow_surface: "",
        starting_ox_level: "",
        ending_ox_level: "",
        location: "",
        outside_temp: "",
        water_temp: "",
        description: "",
    }

    getScubaData = () => {
        this.state.scubaDiveService.getScubaDiveList().then((res) =>{
            this.setState({scubaList: res.data})
            console.log(res.data)
        })
    }

    onSubmit = (e) =>{
        
        const newSubaData = {
            max_depth: this.refs.max_depth.value,
            time_bellow_surface: this.refs.time_bellow_surface.value,
            starting_ox_level: this.refs.starting_ox_level.value,
            ending_ox_level: this.refs.ending_ox_level.value,
            location: this.refs.location.value,
            outside_temp: this.refs.outside_temp.value,
            water_temp: this.refs.water_temp.value,
            description: this.refs.description.value
        };

        this.state.scubaDiveService.addScubaData(newSubaData).then((res)=>{
            this.setState({actionSuccess:true})
        })
       e.preventDefault();
    }
    
    componentDidMount(){
        this.getScubaData();
    }
    
    render(){

        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Max Depth</label>
                    <input className="form-control" 
                            type="text"
                            ref="max_depth"
                            //value={this.state.max_depth}
                            //onChange={this.onChange}
                            />

                    <label >Time Bellow Surface</label>
                    <input className="form-control" 
                            type="time"
                            ref="time_bellow_surface"
                            //value={this.state.time_bellow_surface}
                            //onChange={this.onChange}
                            />

                    <label >Starting Oxigen Level</label>
                    <input className="form-control" 
                            type="text"
                            ref="starting_ox_level"
                            //onChange={this.onChange}
                            //value={this.state.starting_ox_level}
                            />

                    <label >Ending Oxigen Level</label>
                    <input className="form-control" 
                            
                            type="text"
                            ref="ending_ox_level"
                            //onChange={this.onChange}
                            //value={this.state.ending_ox_level}
                            />

                    <label >Location</label>
                    <input className="form-control" 
                            
                            type="text"
                            ref="location"
                            //onChange={this.onChange}
                            //value={this.state.location}
                            />

                    <label >Outside Temp</label>
                    <input className="form-control" 
                            
                            type="text"
                            ref="outside_temp"
                            //onChange={this.onChange}
                            //value={this.state.outside_temp}
                            />

                    <label >Water Temp</label>
                    <input className="form-control" 
                            type="text"
                            ref="water_temp"
                            //onChange={this.onChange}
                            //value={this.state.water_temp}
                            />

                    <label>Description</label>
                    <textarea className="form-control" 
                                rows="3"
                                ref="description"
                                //onChange={this.onChange}
                                //value={this.state.description}
                                ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
  
        )
    }
}
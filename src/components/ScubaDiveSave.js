import  React, { Component } from  'react';
//import { useHistory as history } from "react-router-dom";
import { withRouter } from "react-router-dom";
import scubaDiveService from "../services/ScubaDiveService";


class ScubaDiveSave extends Component{
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

    onSubmit = (e) =>{
        const newSubaData = {
            max_depth: this.state.max_depth,
            time_bellow_surface: this.state.time_bellow_surface,
            starting_ox_level: this.state.starting_ox_level,
            ending_ox_level: this.state.ending_ox_level,
            location: this.state.location,
            outside_temp: this.state.outside_temp,
            water_temp: this.state.water_temp,
            description: this.state.description
        };

        this.state.scubaDiveService.addScubaData(newSubaData).then((res)=>{
            this.setState({actionSuccess:true},
                console.log(res.data))
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        })
       e.preventDefault();
       this.setState({
            max_depth:"",
            time_bellow_surface:"",
            starting_ox_level:"",
            ending_ox_level:"",
            location:"",
            outside_temp:"",
            water_temp:"",
            description:""
      });
      this.props.history.push('/')
    }
    onChange  = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Max Depth</label>
                    <input className="form-control" 
                            type="text"
                            name="max_depth"
                            value={this.state.max_depth}
                            onChange={this.onChange}
                            />

                    <label >Time Bellow Surface</label>
                    <input className="form-control" 
                            type="time"
                            name="time_bellow_surface"
                            value={this.state.time_bellow_surface}
                            onChange={this.onChange}
                            />

                    <label >Starting Oxigen Level</label>
                    <input className="form-control" 
                            type="text"
                            name="starting_ox_level"
                            onChange={this.onChange}
                            value={this.state.starting_ox_level}
                            />
                    <label >Ending Oxigen Level</label>
                    <input className="form-control"      
                            type="text"
                            name="ending_ox_level"
                            onChange={this.onChange}
                            value={this.state.ending_ox_level}
                            />
                    <label >Location</label>
                    <input className="form-control" 
                            type="text"
                            name="location"
                            onChange={this.onChange}
                            value={this.state.location}
                            />
                    <label >Outside Temp</label>
                    <input className="form-control" 
                            type="text"
                            name="outside_temp"
                            onChange={this.onChange}
                            value={this.state.outside_temp}
                            />
                    <label >Water Temp</label>
                    <input className="form-control" 
                            type="text"
                            name="water_temp"
                            onChange={this.onChange}
                            value={this.state.water_temp}
                            />
                    <label>Description</label>
                    <textarea className="form-control" 
                                rows="3"
                                name="description"
                                onChange={this.onChange}
                                value={this.state.description}
                                ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
  
        )
    }
}
export default withRouter(ScubaDiveSave);
import  React, { Component } from  'react';
import scubaDiveService from "../services/ScubaDiveService";
import { DataGrid } from '@material-ui/data-grid';

export default class ScubaDiveList extends Component{
    state = {
        scubaDiveService: new scubaDiveService(),
        scubaList: []
    }

    componentDidMount() {
        this.scubaList ()
    }
    
    scubaList = () =>{
        this.state.scubaDiveService.getScubaDiveList().then((res) => {
            this.setState({
                scubaList: res.data
            })
        })
    }

    columns= [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'max_depth', headerName: 'Maximum Depth', width: 130 },
        { field: 'time_bellow_surface', headerName: 'Time Bellow Surface', width: 130 },
        {field:'starting_ox_level', headerName: 'Starting Oxigen Level', width:130},
        {field:'ending_ox_level', headerName: 'Ending Oxigen Level', width:130},
        {field:'location', headerName: 'Location', width:130},
        {field:'ts', headerName: 'Date - Time', width:130},
        {field:'outside_temp', headerName: 'Outside Temp', width:130},
        {field:'water_temp', headerName: 'Water Temp', width:130}
        
    ]

    render(){
        return(
            <div>
                    <div >
                        <div style={{ height: 400, 
                            width: '100%'}}>
                            <DataGrid 
                            rows={this.state.scubaList} 
                            columns={this.columns} 
                            pageSize={5}/>
                    </div>
                </div>
            </div>
        )
    }
}
import  React, { Component } from  'react';
import scubaDiveService from "../services/ScubaDiveService";
import { DataGrid } from '@material-ui/data-grid';
import Moment from 'moment'

export default class ScubaDiveList extends Component{
    state = {
        scubaDiveService: new scubaDiveService(),
        scubaList: [],
        searchResult: [],
        searchValue: ''
    }

    componentDidMount() {
        
        this.scubaList()

    }

    setDate =(date) =>{
        Moment.locale('en')
        let new_date = Moment(date).format('DD-MM-YYYY hh:mm:ss')
        return new_date;
    }

    scubaList = async () => {
        const scubaList = await this.state.scubaDiveService.getScubaDiveList();
        
        let scubaListFormat = scubaList.data.map((scuba) => {
            if (scuba.ts) {
                scuba['ts'] = this.setDate(scuba.ts)
            }
            return scuba
        })
        this.setState({
            scubaList: scubaListFormat
        })
    }
    
    filterArray = (arr, searchKey)=> {
        return arr.filter(obj =>{
            return Object.keys(obj).some(key =>{
                return obj[key].toString().toLowerCase().includes(searchKey);
            })
        })
    }

    onChange = (e)=>{
        this.setState({
            searchValue: e.target.value
        })

        let searchResult = this.filterArray(this.state.scubaList, this.state.searchValue)

        this.setState({
            scubaList: searchResult,
        })
        if(e.target.value === ""){
            this.scubaList()
        }
    }
    

    columns= [
        {field: 'id', headerName: 'ID', width: 70 },
        {field: 'max_depth', headerName: 'Maximum Depth', width: 130 },
        {field: 'time_bellow_surface', headerName: 'Time Bellow Surface', width: 130 },
        {field:'starting_ox_level', headerName: 'Starting Oxigen Level', width:130},
        {field:'ending_ox_level', headerName: 'Ending Oxigen Level', width:130},
        {field:'location', headerName: 'Location', width:130},
        {field:'ts', headerName: 'Date - Time', width:200, format:"0:MMM yyyy"},
        {field:'outside_temp', headerName: 'Outside Temp', width:130},
        {field:'water_temp', headerName: 'Water Temp', width:130}
        
    ]

    render(){
        return(
            <div>
                <div>
                <label>Search</label>
                    <input className="form-control" 
                            type="text"
                            name="search"
                            value={this.state.searchValue}
                            onChange={this.onChange}
                            />
                    <div style={{ height: 400, 
                        width: '100%'}}>
                        <DataGrid 
                        rows={this.state.scubaList} 
                        columns={this.columns} 
                        pageSize={10}/>
                </div>
                </div>
            </div>
        )
    }
}
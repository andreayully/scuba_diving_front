import axios from "axios";
//const API_URL = 'http://localhost:8000';


export default class ScubaDiveService{

    api = {
        url: "http://localhost:8000"
    }

    getScubaDiveList(){
        return axios.get(`${this.api.url}/scuba-dive-data/`)
    }

    addScubaData(scuba){
        return axios.post(`${this.api.url}/scuba-dive-data/`, scuba)
    }
}
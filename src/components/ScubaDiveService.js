import axios from "axios";
const API_URL = 'http://localhost:8000';


export default class ScubaDiveService{
    constructor(){}

    async getScubaDiveList(){
        const url = `${API_URL}/scuba-dive-data/`;
        const response = await axios.get(url);
        return response.data;
    }
}
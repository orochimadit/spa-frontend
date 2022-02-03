import axios from 'axios';
import { config } from '../config';


export async function getMaterials(params){
    return await axios.get(`${window.env.REACT_APP_API_HOST}/api/materials`);
}
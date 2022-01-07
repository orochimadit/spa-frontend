import axios from 'axios';
import { config } from '../config';

export async function getFunds(){
    return await axios.get(`${config.api_host}/api/funds`);
}
import axios from "axios";
import { config } from "../config";

export async function getInventoryBooks(params){
    return await axios.
        get(`${window.env.REACT_APP_API_HOST}/api/inventoryBooks`,{
            params,
        });
}
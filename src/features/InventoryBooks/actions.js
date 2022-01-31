import {
    SUCCESS_FETCHING_INVENTORY_BOOK,
    START_FETCHING_INVENTORY_BOOK,
    ERROR_FETCHING_INVENTORY_BOOK
} from './constants';

export const startFetchingInventoryBook = () =>{
    return {
        type: START_FETCHING_INVENTORY_BOOK
    }
}

export const errorFetchingInventoryBook = () =>{
    return {
        type:ERROR_FETCHING_INVENTORY_BOOK
    }
}

export const successFetchingInventoryBook = ({data,count}) =>{
    return {
        type: SUCCESS_FETCHING_INVENTORY_BOOK,
        data,
        count
    }
}
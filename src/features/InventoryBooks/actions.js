import {
    SUCCESS_FETCHING_INVENTORY_BOOK,
    START_FETCHING_INVENTORY_BOOK,
    ERROR_FETCHING_INVENTORY_BOOK
} from './constants';
import { getInventoryBooks } from '../../api/inventoryBook';
import debounce from 'debounce-promise';
import { useDispatch, useSelector } from 'react-redux';

let debouncedFetchInventoryBooks = debounce(getInventoryBooks,1000);

export const fetchInventoryBooks = () =>{
    //  dispatch(startFetchingInventoryBook());
    return async (dispatch, getState) =>{
        try {
            let {data : {data,count }} = await debouncedFetchInventoryBooks();
            dispatch(successFetchingInventoryBook({data,count}))
        } catch (err) {
            dispatch(errorFetchingInventoryBook())
        }
    }
}
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
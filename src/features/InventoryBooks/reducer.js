import { START_FETCHING_INVENTORY_BOOK,
        ERROR_FETCHING_INVENTORY_BOOK,
    SUCCESS_FETCHING_INVENTORY_BOOK,
    SET_KEYWORD,} from './constants';

const statusList = {
    idle: 'idle',
    process : 'process',
    success: 'success',
    error: 'error'
}

const initialState = {
    data:[],
    status:statusList.idle,

};

export default function reducer (state = initialState, action){
    
    switch(action.type){

        case START_FETCHING_INVENTORY_BOOK:
            return {...state, status: statusList.process}
        case ERROR_FETCHING_INVENTORY_BOOK:
            return {...state, status:statusList.error}
        case SUCCESS_FETCHING_INVENTORY_BOOK:
            return {...state, data:action.data , totalItems:action.count,
                status:statusList.success}
        default:
            return state;
    }

}
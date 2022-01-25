//import module dari redux
import { combineReducers,createStore, applyMiddleware, compose } from "redux";

//import thunk dari middleware
import thunk from "redux-thunk";

//buat composer enhancher untuk menghubungkan dengan chrome DevTools Redux

const composerEnhancher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE 
|| compose;

//  gabung reducer ,untuk sementara kosong,karena kita belum membuat reducer
const rootReducer = combineReducers({});

//buat store    dan gunakan composer enhancher + middleware thunk
const store = createStore(rootReducer,composerEnhancher(applyMiddleware(thunk)));

export default store;

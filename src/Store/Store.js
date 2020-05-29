import {createStore, combineReducers} from "redux";
import CardReducer from "./Reducers/cardReducer";
import FilterReducer from './Reducers/FilterReducer'
import FiltratingReducer from './Reducers/filtrationReducer';
import basketReducer from './Reducers/basketReducer';
import ReducerMenu from './Reducers/Reducermenu.js';
    let reducers = combineReducers({
        items:CardReducer,
        filter:FilterReducer,
        arfilter: FiltratingReducer,
        basket: basketReducer,
        menu: ReducerMenu,
    });
    let store = createStore(reducers);


export default store;
import {createStore, combineReducers} from "redux";
import CardReducer from "./Reducers/cardReducer";
import FilterReducer from './Reducers/FilterReducer'
import FiltratingReducer from './Reducers/filtrationReducer';
import basketReducer from './Reducers/basketReducer';

    let reducers = combineReducers({
        items:CardReducer,
        filter:FilterReducer,
        arfilter: FiltratingReducer,
        basket: basketReducer
    });
    let store = createStore(reducers);


export default store;
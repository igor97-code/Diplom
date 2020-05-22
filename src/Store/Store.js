import {createStore, combineReducers} from "redux";
import CardReducer from "./Reducers/cardReducer";
import FilterReducer from './Reducers/FilterReducer'
import FiltratingReducer from './Reducers/filtrationReducer';

    let reducers = combineReducers({
        items:CardReducer,
        filter:FilterReducer,
        arfilter: FiltratingReducer
    });
    let store = createStore(reducers);
    /*function letData(){
       /!* let sc = document.createElement('script');
        sc.src = "http://api.topsports.ru/spad/q2.php";
        document.getElementsByTagName('head')[0].appendChild(sc);*!/
          return items;
    }*/

export default store;
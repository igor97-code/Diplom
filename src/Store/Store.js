import {createStore, combineReducers} from "redux";
import CardReducer from "./Reducers/cardReducer";

    let reducers = combineReducers({
        items:CardReducer
    })
    let store = createStore(reducers);
    console.log(store.getState());
    /*function letData(){
       /!* let sc = document.createElement('script');
        sc.src = "http://api.topsports.ru/spad/q2.php";
        document.getElementsByTagName('head')[0].appendChild(sc);*!/
          return items;
    }*/

export default store;
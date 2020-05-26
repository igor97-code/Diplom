import data from "../BaseData.js";



function CardReducer(state = data,action){
    let copeobj = JSON.parse(JSON.stringify(state));
    if(action.type == 'openitem'){
        for(let i = 0; i <copeobj.length; i++){
            if(copeobj[i].object_id == action.id){
                copeobj[i].check = true;
            }
            else{
                copeobj[i].check = false;
            }
        }
        return copeobj
    }
    if(action.type == 'addbasket' || action.type == 'closeItem' ){

        for(let i = 0; i <state.length; i++){
            if(copeobj[i].check == true){
                copeobj[i].check = false
            }
        }
        return copeobj
    }
    return state
}

export default CardReducer;


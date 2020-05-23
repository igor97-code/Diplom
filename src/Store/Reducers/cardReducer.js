import data from "../BaseData.js";



function CardReducer(state = data,action){
    if(action.type == 'openitem'){
        for(let i = 0; i <state.length; i++){
            if(state[i].object_id == action.id){
                state[i].check = true;
            }
        }
    }
    console.log(state);
    return state;
}

export default CardReducer;


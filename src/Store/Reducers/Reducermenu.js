






let ReducerMenu = (state = {},action)=>{
    if(action.type == "checkmenu"){
        let copyState = JSON.parse(JSON.stringify(state));
        if(!copyState.hasOwnProperty("open")){
            copyState.open = false;
        }
        if(copyState.open == true )
            copyState.open = false
        else copyState.open = true;

        return copyState;
    }
    return state;
}

export default ReducerMenu;
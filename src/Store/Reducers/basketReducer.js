




let basketReducer = function(state = {}, action){
    let copeobj = JSON.parse(JSON.stringify(state));
    if(action.type == 'addbasket'){
        copeobj.hasOwnProperty('items') ?  copeobj.items.push(action.id) :  copeobj.items = [action.id];
        return copeobj
    }
    if(action.type == 'deleteItems'){
        console.log("basket", copeobj.items);
       for(let i = 0; i < copeobj.items.length; i++){
           if(copeobj.items[i] == action.id){
               copeobj.items.splice(i,1);
           }
       }
        return copeobj;
    }
    if(action.type == 'showbasket'){
        copeobj.open == true ? copeobj.open = false :copeobj.open= true;
        return copeobj
    }
        return state;
}

export default basketReducer;
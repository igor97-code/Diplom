





function FiltratingReducer(state ={},action){
       var Arfilter = state;
       console.log(action);
       if(!action.hasOwnProperty('id')){
         for(let key in Arfilter){
             if(key != 'brand' && key != 'cat'){
                 delete Arfilter[key];
             }
         }
       }
    if(action.type == 'checkfilter'){
       if(!Arfilter.hasOwnProperty(action.key)){
           Arfilter[action.key]= [];
           Arfilter[action.key].push(action.value)
       }
       else{
           if( Arfilter[action.key].includes(action.value)){
               let index =  Arfilter[action.key].indexOf(action.value);
               Arfilter[action.key].splice(index, 1);
           }
           else{
               Arfilter[action.key].push(action.value)
           }
       }
    }
    for(let key in Arfilter){
        if(Object.keys(Arfilter[key]).length == 0){
            delete Arfilter[key];
        }
    }
    return Arfilter;
}

export default FiltratingReducer;
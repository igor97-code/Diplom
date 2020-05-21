let filter = [
    {   id:0,
        tytle: 'Категории',
        items: [
            { id:0,tytle:'Комбинезоны',check:false},
            {id:1,tytle:'Куртки',check:false},
            {id:2,tytle:'Штаны',check:false},
            {id:3,tytle:'Кофты,футболки',check:false},
            {id:4,tytle:'Термобелье',check:false},
            {id:5,tytle:'Головные уборы',check:false},
            {id:6,tytle:'Перчатки',check:false},
            {id:7,tytle:'Средства по уходу',check:false}

        ]
    },
    {   id:1,
        tytle: 'Бренды',
        items: [{id:8,tytle:'509',check:false},
            {id:9,tytle:'Shark', check:false},
            {id:10,tytle:'SpyOptic',check:false},
            {id:11,tytle:'Jethwear',check:false},
            {id:12,tytle:'BCA',check:false},
            {id:13,tytle:'FXR',check:false},
            {id:14,tytle:'Abom',check:false}]
    }
];


function FilterReducer(state = filter,action){
    let states = state;

    for(let key in states){
      for(let i = 0; i<states[key].items.length; i++){
        if(states[key].items[i].id == action.id){
            if(states[key].items[i].check == false){
                states[key].items[i].check = true
            }
            else{
                states[key].items[i].check == false;
            }
        }
      }
    }
    console.log(states);
    return states;
}


export default FilterReducer;
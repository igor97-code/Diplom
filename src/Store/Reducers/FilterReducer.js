let filter = [
    {   id:0,
        tytle: 'Категории',
        items: [
            { key:'cat',id:0,tytle:'Комбинезоны',check:false},
            {key:'cat',id:1,tytle:'Куртки',check:false},
            {key:'cat',id:2,tytle:'Штаны',check:false},
            {key:'cat',id:3,tytle:'Кофты,футболки',check:false},
            {key:'cat',id:4,tytle:'Термобелье',check:false},
            {key:'cat',id:5,tytle:'Головные уборы',check:false},
            {key:'cat',id:6,tytle:'Перчатки',check:false},
            {key:'cat',id:7,tytle:'Средства по уходу',check:false}

        ]
    },
    {   id:1,
        tytle: 'Бренды',
        items: [{key:'brand',id:8,tytle:'509',check:false},
            {key:'brand',id:9,tytle:'Shark', check:false},
            {key:'brand',id:10,tytle:'SpyOptic',check:false},
            {key:'brand',id:11,tytle:'Jethwear',check:false},
            {key:'brand',id:12,tytle:'BCA',check:false},
            {key:'brand',id:13,tytle:'FXR',check:false},
            {key:'brand',id:14,tytle:'Abom',check:false}]
    }
];


function FilterReducer(state = filter,action){
    let states = state;
    if(action.type == 'checkfilter'){
        for(let key in states){
            for(let i = 0; i<states[key].items.length; i++){
                if(states[key].items[i].id == action.id){
                    if(states[key].items[i].check == false){
                        states[key].items[i].check = true
                    }
                    else{
                        states[key].items[i].check = false
                    }
                }
            }
        }
    }
    return states;
}


export default FilterReducer;
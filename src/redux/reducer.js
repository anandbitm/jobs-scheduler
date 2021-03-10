import {ADD_PROFILE,UPDATE_PROFILE,ADD_JOB} from "./actionTypes";

const defaultState = {
    profiles:[
        { 
            id:1,
            name:"Anand",
            isActive:true,
            jobs: []//{start:75,end:150,name:"Job1",color:"red",id:1}
         },
         {id:2,
          name:"Max",
          isActive:false,
          jobs: []
        }
    ]
}

const reducer = (state = defaultState,action) =>{

    switch(action.type){
        
         case ADD_PROFILE:
             return {
                 ...state,
                 profiles:[...state.profiles,action.payload]
             }
         case UPDATE_PROFILE:
             return {
                 ...state,
                 profiles:[...action.payload]
             }
        case ADD_JOB:
            return {
                ...state,
                profiles:[...action.payload]
            }
         default:
             return state;
    }
       
}

export default reducer;
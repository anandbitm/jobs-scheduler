const defaultState = {
    jobs: [{start:"1:15",end:"2:30",name:"Job1",color:"red",id:1},{id:2,start:"3:15",end:"23:30",name:"Job2",color:"green"}],
    profiles:[{id:1,name:"Anand",count:0},{id:2,name:"Max",count:0}]
}

const reducer = (state = defaultState,action) =>{

    switch(action.type){
         case "ADD_PROFILE":
             return {
                 ...state,
                 profiles:[...state.profiles,action.payload]
             }
        case "ADD_JOB":
            return {
                ...state,
                jobs:[...state.jobs,action.payload]
            }
         default:
             return state;
    }
       
}

export default reducer;
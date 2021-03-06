const defaultState = {
    jobs: []
}

const reducer = (state = defaultState,action) =>{

    switch(action.type){
         case "ADD_JOB":
             return {
                 jobs:[...state.jobs,action.payload]
             }
         default:
             return state;
    }
       
}

export default reducer;
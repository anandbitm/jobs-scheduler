import { ADD_PROFILE, UPDATE_JOB, ADD_JOB, DELETE_JOB } from "./actionTypes"

const defaultState = {
  profiles: [
    {
      id: 1,
      name: "Anand",
      isActive: true,
      jobs: [], // {start:75,end:150,name:"Job1",color:"red",id:1}
    },
    {
      id: 2,
      name: "Max",
      isActive: false,
      jobs: [],
    },
  ],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      }
    case UPDATE_JOB:
      return {
        ...state,
        profiles: [...action.payload],
      }
    case ADD_JOB:
      return {
        ...state,
        profiles: [...action.payload],
      }
    case DELETE_JOB: {
      const profiles = [...state.profiles].map((profile) => {
        if (profile.isActive) {
          for (let i = 0; i < profile.jobs.length; i++) {
            if (profile.jobs[i].id === action.payload) {
              profile.jobs.splice(i, 1)
            }
          }
        }
        return profile
      })

      return {
        ...state,
        profiles: profiles,
      }
    }
    default:
      return state
  }
}

export default reducer

import { Brand_Add, Clear_Option, Option_Add } from "../actionTypes/actionTypes";

const initialState ={
    filtter:[],
    option:[]
}


const filtterReducer = (state=initialState,action) =>{
  const oldProduct = state.filtter.find(pro=> pro === action.payload)

  
   switch(action.type){
    case Brand_Add:
      if(oldProduct){
        return{
          ...state,
          filtter: state.filtter.filter(brand => brand !== action.payload)
        }
      }
      return{
        ...state,
        filtter:[...state.filtter,action.payload]
      }

     case Option_Add:
      return{
        ...state,
        option:[action.payload]
      }

     case Clear_Option:
      return{
        ...state,
        option:[]
      }

     default: return state
}
}

export default filtterReducer;
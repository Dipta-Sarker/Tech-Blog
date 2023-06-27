import { combineReducers } from "redux";
import productReducer from "./productReducer";
import filtterReducer from "./filtterReducers";

 const rootReducer = combineReducers({
    products:productReducer,
    filtters:filtterReducer
 })

 export default rootReducer;
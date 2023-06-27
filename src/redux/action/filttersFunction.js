import { Brand_Add, Clear_Option, Option_Add } from "../actionTypes/actionTypes"

export const brand_filtter = (data) =>{
    return{
        type: Brand_Add,
        payload:data
    }

}

export const option_filtter = (data)=>{
 return{
    type:Option_Add,
    payload:data
 }
}

export const clear_filtter = () =>{
    return{

        type:Clear_Option
    }
}
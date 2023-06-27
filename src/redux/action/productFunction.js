import { Add_To_Store, DELETE_CONTENT, GET_CONTENT, Singleproduct, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const fetchProducts = (data)=>{
    return{
        type:GET_CONTENT,
        payload:data
    }
}


export const singleProduct =(data)=>{
    return{
        type:Singleproduct,
        payload:data
    }
}

export const productDelete = (id)=>{
    return{
        type:DELETE_CONTENT,
        payload:id
    }
}

export const updateOne = (id) =>{
    return{
        type:UPDATE_CONTENT,
        payload:id 
    }

}

export const store = (data) =>{
    return{
        type:Add_To_Store,
        payload:data
    }
}






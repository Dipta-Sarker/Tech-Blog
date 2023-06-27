import { toast } from "react-toastify"
import { productDelete } from "../../action/productFunction"

const deleteProduct = (id) =>{
    return async (dispatch,getState)=>{
        const res = await fetch(`https://tech-server.vercel.app/product/${id}`,{
            method:'DELETE'
        })
        const data = await res.json()
        if(data.acknowledged){
           dispatch(productDelete(id))
            toast('Delete Successfully')
        }
        console.log(data)
    }
}

export default deleteProduct;
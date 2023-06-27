import { toast } from "react-toastify"
import { updateOne } from "../../action/productFunction"

const updateProduct = (id,product) =>{
    return async(dispatch,getState)=>{
        const res = await fetch(`https://tech-server.vercel.app/product/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)

        })
        const data = await res.json()
        if(data.acknowledged){
            dispatch(updateOne(id))
            toast('Update Successfully')
        }
        console.log(data)

    }
}

export default updateProduct;
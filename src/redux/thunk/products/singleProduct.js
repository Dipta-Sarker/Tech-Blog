import { singleProduct } from "../../action/productFunction"

const singleProductFetch = (id) =>{
    return async(dispatch,getState)=>{
        const res = await fetch(`https://tech-server.vercel.app/product/${id}`)
        const data = await res.json()
        if(data){
            dispatch(singleProduct(data))
        }
    
      
    }

}
export default singleProductFetch;
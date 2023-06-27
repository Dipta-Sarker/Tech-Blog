import { fetchProducts } from "../../action/productFunction"

const loadedProducts = () =>{
    return async (dispatch,getState)=>{
        const res = await fetch('https://tech-server.vercel.app/products')
        const data = await res.json()
        if(data.data){
            dispatch(fetchProducts(data.data))
        }
        

    }
}
export default loadedProducts;
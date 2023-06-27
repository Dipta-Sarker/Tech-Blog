import { toast } from "react-toastify"

const addProduct = (product)=>{
    return async(dispatch,getState)=>{
        const res = await fetch('https://tech-server.vercel.app/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        const data = await res.json()
        if(data.acknowledged){
            toast('Post Successfully Done')
        }
        console.log(data)

    }
}

export default addProduct;
import React, { useEffect } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import { useDispatch, useSelector } from 'react-redux';
import singleProductFetch from '../../../redux/thunk/products/singleProduct';
import { useParams } from 'react-router-dom';



const Update = () => {
    const param = useParams()
    const id = param.id;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(singleProductFetch(id))
    },[id,dispatch])
    const singleProduct = useSelector((state)=>state.products.product)
    
   

    return (
        <div>
            <h1>Update</h1>
            {
                singleProduct.map(product =>  <AddProduct key={product._id} product={product} ></AddProduct>)
            }
           
        </div>
    );
};

export default Update;
import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import singleProductFetch from '../../redux/thunk/products/singleProduct';

const ProductDetails = () => {
    const productId = useParams()
    const id = productId.id
    const dispatch = useDispatch()
    const product = useSelector((state)=>state.products.product)
    

    

    useEffect(()=>{
        dispatch(singleProductFetch(id))
    },[id,dispatch])
   


    return (
        
        <div className='flex justify-center my-6'>
            {product.map(product =><div className='rounded shadow-lg max-w-sm  overflow-hidden h-full'>
                <img src={product.image} alt="tech" className='w-4/5 mx-auto' />
                <div className='px-6 py-4'>
                    <h1 className='text-lg font-bold text-violet-700'>{product.model}</h1>
                    <div>
                        <ul>
                            {product.keyFeature.map(feture => <li className='my-3 text-slate-500'>{feture}</li>)}
                        </ul>
                    </div>
                    <div>     
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default ProductDetails;
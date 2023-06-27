import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadedProducts from '../../../redux/thunk/products/fetchProducts';
import { PlusCircleIcon ,TrashIcon} from '@heroicons/react/24/solid'
import deleteProduct from '../../../redux/thunk/products/deleteProduct';
import { Link, useLocation } from 'react-router-dom';


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    
    useEffect(() => {
        dispatch(loadedProducts())
    }, [dispatch])
    
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='bg-red-300 w-full p-10 rounded shadow-lg'>
                <h1 className='my-4 text-lg text-white font-bold'>ProductList</h1>
                <table className='w-full'>
                    <thead class=' font-semibold uppercase text-gray-400 bg-gray-50'>
                        <tr>
                            <th></th>
                            <th class='text-left p-2'>PRODUCT NAME</th>
                            <th class='text-left p-2'>BRAND</th>
                            <th class='text-left p-2'>IN STOCK</th>
                            <th class='text-left p-2'>PRICE</th>
                            <th class='text-left p-2'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody class=' divide-y divide-gray-100'>
                        {
                            products.map(product =>
                                <tr className='hover:bg-pink-200'>
                                    <td className='p-2'><input type='checkbox'></input></td>
                                    <td className='p-2'>{product.model}</td>
                                    <td className='p-2'>{product.brand}</td>
                                    <td className='p-2'>{product.status ? <p>Available</p> : <p>Stock Out</p>}</td>
                                    <td className='p-2'>{product.price}</td>
                                    <Link to={`/dashboard/update/${product._id}`}>
                                    <button title='Update Produt'><PlusCircleIcon  className="hover:text-white  mx-2 mt-2 h-6 w-6 text-gray-500"/></button>
                                    </Link>
                                    <button title='Delete Product'
                                    onClick={()=>dispatch(deleteProduct(product._id))}
                                    ><TrashIcon  className="hover:text-white h-6 w-6 text-gray-500"/> 
                                    </button> 
                                </tr>)
                        }
                    </tbody>

                </table>



            </div>
        </div>
    );
};

export default ProductList;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { brand_filtter } from '../../redux/action/filttersFunction';
import { store } from '../../redux/action/productFunction';

const ProductCard = ({ product }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const filtter = useSelector((state) => state.filtters.filtter)


    const activeClass = "text-white bg-teal-300 border-white";
    return (
        <div className='my-6'>   
            <div className='rounded shadow-lg max-w-sm  overflow-hidden h-full'>
                {location.pathname === '/readingHistory' ?
                <div className='flex justify-end p-3'>
                    <p className='rounded-full bg-green-500 p-2'>{product.read}</p>
                </div>
                :
                <></>

                }
                <img src={product.image} alt="tech" className='w-4/5 mx-auto' />
                <div className='px-6 py-4'>
                    <h1 className='text-lg font-bold text-violet-700'>{product.model}</h1>
                    <p className='text-slate-500 mt-2'>{product.date}</p>
                    <p className='text-slate-500 mt-2 font-semibold'>Price: {product.price}</p>
                    <div>
                        <ul>
                            {product.keyFeature.map(feture => <li className='my-3 text-slate-500'>{feture}</li>)}
                        </ul>
                    </div>
                    <button
                        onClick={() => dispatch(brand_filtter(product.brand))}
                        className={` hover:bg-green-300 bg-slate-400 py-2 px-6 rounded-full text-white font-bold ${filtter.length ? activeClass : null}`}>
                        #{product.brand}
                    </button>
                    <Link to={`/productDetails/${product._id}`}>
                        <button onClick={()=>dispatch(store(product))}
                            className='hover:bg-green-300 bg-slate-400 py-2 px-6 rounded-full text-white font-bold'>See All
                        </button>
                    </Link>
                </div>
            </div>
        
        </div>
    );
};

export default ProductCard;
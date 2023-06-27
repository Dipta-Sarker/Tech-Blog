import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';

const ReadingHistory = () => {
    const store = useSelector((state)=>state.products.store)
    
    return (
        <div className='grid grid-cols-3'>
            {
                store.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default ReadingHistory;
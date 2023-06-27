import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadedProducts from '../../redux/thunk/products/fetchProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import { clear_filtter, option_filtter } from '../../redux/action/filttersFunction';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products)
    const filtters = useSelector((state) => state.filtters.filtter)
    const option = useSelector((state) => state.filtters.option)
    
    useEffect(() => {
        dispatch(loadedProducts())
    }, [dispatch])
    


    

    const onSubmit = (e) =>{
        const data = e.target.value;
        dispatch(option_filtter(data))
    }

    const activeClass = "bg-red-400"

    let content;
    if(products.length){
         content =  products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    if(products.length && filtters.length ){
        content = products.filter(product=>filtters.includes(product.brand)).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
   
    if(products.length && option.includes('Sort by the first upload')){
        content = products.sort((a,b) => new Date(a.date) - new Date(b.date) ).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    if(products.length && option.includes('Sort by last upload')){
        content = products.sort((a,b) => new Date(b.date) - new Date(a.date) ).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }


    return (
        <div>
            <div className='flex justify-end items-center my-12'>
                <form action="">
                    <select className='border-4 border-gray-50'  name="sort" id="sort" onChange={onSubmit}>
                        <option disabled >Filtter Your Products</option>
                        <option value="Sort by last upload">Sort by last upload</option>
                        <option value="Sort by the first upload">Sort by the first upload</option>
                    </select>
                </form>
                    <button onClick={()=> dispatch(clear_filtter())} className={`bg-emerald-400 px-4 py-2 ms-2 text-white font-bold rounded-lg  ${option.length? activeClass : null}`}>Clear</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4 my-20 justify-items-center'>
                {content }
            </div>
        </div>
    );
};

export default Home;
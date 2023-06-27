import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addProduct from '../../../redux/thunk/products/addProduct';
import { useLocation, useParams } from 'react-router-dom';
import updateProduct from '../../../redux/thunk/products/updateProduct';



const AddProduct = ({ product }) => {
    const { id } = useParams()
    const location = useLocation()


    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {




        if (location.pathname === `/dashboard/update/${id}`) {



            const product = {
                model: data.model,
                brand: data.brand,
                status: data.status === "true" ? true : false,
                price: data.price,
                date: new Date(data.date),
                keyFeature: [
                    data.keyFeature1,
                    data.keyFeature2,
                    data.keyFeature3,
                    data.keyFeature4,
                ],
                spec: [],
            }
            dispatch(updateProduct(id, product))
            console.log(product)
        }
        else {
            const image = data.image[0]
            const photo = new FormData()
            photo.append('image', image)



            fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_photo_Api}`, {
                method: 'POST',
                body: photo
            })
                .then(res => res.json())
                .then(imgData => {
                    console.log(imgData)
                    console.log(imgData.data.url)
                    const url = imgData.data.url


                    if (imgData.success) {

                        const product = {
                            model: data.model,
                            brand: data.brand,
                            image: url,
                            status: data.status === "true" ? true : false,
                            price: data.price,
                            date: new Date(data.date).toLocaleString(),
                            keyFeature: [
                                data.keyFeature1,
                                data.keyFeature2,
                                data.keyFeature3,
                                data.keyFeature4,
                            ],
                            spec: [],
                        }
                        dispatch(addProduct(product))
                        console.log(data.date)
                        console.log(product)

                    }
                })
                .then(error => console.log(error))



        }
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-gray-200' >
                {/* register your input into the hook by invoking the "register" function */}
                <div className='flex flex-col w-full max-w-xs '>
                    <label className='mb-2' htmlFor='model'>
                        Model
                    </label>
                    <input defaultValue={product?.model} type='text' name='model' id='model' {...register("model")} className='p-1 rounded' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='file' id='image' name='image' {...register("image")} className='p-1 rounded' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='price'>
                        Price
                    </label>
                    <input defaultValue={product?.price} type='text' id='price' name='price' {...register("price")} className='p-1 rounded' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='brand'>
                        Brand
                    </label>
                    <select defaultValue={product?.brand} name='brand' id='brand' {...register("brand")} className='p-1 rounded'>
                        <option value='Amd'>AMD</option>
                        <option value='Intel'>Intel</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <h1 className='mb-3'>Availability</h1>
                    <div className='flex gap-3'>
                        <div className='flex items-center'>
                            <input
                                type='radio'
                                id='available'
                                value={true}
                                {...register("status")}
                                className='h-5 w-5'
                            />
                            <label className='ml-2 text-lg' htmlFor='available'>
                                Available
                            </label>
                        </div>
                        <div className='flex items-center'>
                            <input
                                type='radio'
                                id='stockOut'
                                name='status'
                                value={false}
                                {...register("status")}
                                className='h-5 w-5'
                            />
                            <label className='ml-2 text-lg' htmlFor='stockOut'>
                                Stock out
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature1'>
                        Key Feature 1
                    </label>
                    <input
                        type='text'
                        defaultValue={product?.keyFeature[0]}
                        name='keyFeature1'
                        id='keyFeature1'
                        {...register("keyFeature1")}
                        className='p-1 rounded'
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature2'>
                        Key Feature 2
                    </label>
                    <input
                        type='text'
                        defaultValue={product?.keyFeature[1]}
                        name='keyFeature2'
                        id='keyFeature2'
                        {...register("keyFeature2")}
                        className='p-1 rounded'
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature3'>
                        Key Feature 3
                    </label>
                    <input
                        type='text'
                        defaultValue={product?.keyFeature[2]}
                        name='keyFeature3'
                        id='keyFeature3'
                        {...register("keyFeature3")}
                        className='p-1 rounded'
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature4'>
                        Key Feature 4
                    </label>
                    <input
                        type='text'
                        defaultValue={product?.keyFeature[3]}
                        name='keyFeature4'
                        id='keyFeature4'
                        {...register("keyFeature4")}
                        className='p-1 rounded'
                    />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"  {...register("date")} className='p-1 rounded' />
                    {/* <input type="datetime-local" name="" id="" /> */}


                </div>
                {/* include validation with required or other standard HTML validation rules */}

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
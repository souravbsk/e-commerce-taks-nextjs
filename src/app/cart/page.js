'use client'
import { clearCart } from '@/Store/CartSlice/CartSlice';
import CartProduct from '@/components/CartProduct';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const products = useSelector(state => state.cart);
    console.log(products);
    const totalprice = products.reduce((acc,current) => acc + current.price,0)
    const dispatch = useDispatch();
    console.log(totalprice);
    const handleClearAll = () => {
        dispatch(clearCart())
    }
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row items-end'>
            <h2 className='text-4xl flex-shrink-0 font-semibold text-[#013D29]'>Cart</h2>
            <div className='w-full h-0.5 bg-[#013D29]'></div>
            </div>
            <div className='md:grid-cols-3 grid gap-3'>
            <div className='flex flex-col md:col-span-2 gap-8 mt-12'>
                {products && products.map((product,i) => <CartProduct product={product} key={i}></CartProduct>)}
           {products ?  <button onClick={handleClearAll} className='btn'>Delete All</button> : ""}
            </div>
            <div className='py-5 px-8'>
                <h2 className='text-3xl text-[#013D29] font-semibold'> Total Price</h2>
                <p className=' mt-4 text-4xl font-bold'>${totalprice}</p>
            </div>
            </div>
        </div>
    );
};

export default Cart;
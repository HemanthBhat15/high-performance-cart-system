import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../counter/CounterSlice';
import './ProductList.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import pcimage from "../../assets/pc.png";
import mouseimage from "../../assets/mouse.png";
import laptopimage from "../../assets/laptopimage.png";
import keyboardimage from "../../assets/keyboard.png";
const products = [
    { id: 'p1', name: 'Laptop', price: 1200, img: laptopimage },
    { id: 'p2', name: 'Keyboard', price: 75, img: keyboardimage },
    { id: 'p3', name: 'Mouse', price: 25, img: mouseimage },
    { id: 'p4', name: 'Monitor', price: 300, img: pcimage },
];

const ProductList = ({searchQuery}) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addItemToCart({ id: product.id, name: product.name, price: product.price, img: product.img }));
    };
   const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <div className="col-span-12 lg:col-span-8">
            <header className='mb-lg'>
                <h2 className='font-h1 text-h1 text-on-surface mb-xs text-left'>Available Products</h2>
                <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2x text-left'>Premium hardware designed for seamless productivity and professional workflows.</p>
            </header>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-md'>
                {loading ? (
                    <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
                        <Skeleton count={4} height={"auto"} />
                    </SkeletonTheme>
                ) :  filteredProducts.length === 0 ?(
                    <div className='col-span-2 flex flex-col items-center justify-center py-16 text-center'>
                    <p className='text-4xl mb-4'>🔍</p>
                    <p className='text-lg font-medium text-slate-700'>No products found</p>
                    <p className='text-sm text-slate-400 mt-1'>Try searching for something else</p>
                </div>
                ) : (
                    filteredProducts.map((product) => (
                        <div className='bg-white rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.04)] overflow-hidden group hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300' key={product.id}>
                            <div className='aspect-[4/3] bg-slate-100 overflow-hidden'>
                                <img src={product.img} alt={product.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                            </div>
                            <div className='p-sm'>
                                <div className='flex flex justify-between items-start mb-xs '>
                                    <p> {product.name}</p>
                                    <p> ${product.price.toFixed(2)} </p>
                                </div>
                                <button className='w-full text-white bg-primary text-on-primary py-3 rounded-lg font-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2' onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
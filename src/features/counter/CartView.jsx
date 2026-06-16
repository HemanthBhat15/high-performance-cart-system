import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../counter/CounterSlice'
import "../counter/CartView.css";

const CartView = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    return (
        <div className='col-span-12 lg:col-span-4 sticky top-24' >
        <div className='bg-white rounded-xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] p-md flex flex-col gap-sm'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div>
                            {cartItems.map((item) => (
                                <div className='flex gap-sm items-center pb-sm border-b border-slate-100 pt-sm' key={item.id}>
                                    <div className=' w-16 h-16 rounded-lg overflow-hidden bg-slate-50 flex-shrink-0'>
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div><p className='font-label-sm text-on-surface'>{item.name} </p> <p className='text-caption text-on-surface-variant'>(qty: {item.quantity}) </p></div>
                                    <div className='ml-auto'>
                                        <p className='font-label-sm text-on-surface'> ${item.totalPrice.toFixed(2)}</p>
                                        <button className='text-error text-caption hover:underline' onClick={() => dispatch(removeItemFromCart(item.id))}>Remove </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between'>
                            <p>Total Amount</p>
                            <p>  ${totalAmount.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className=' text-on-surface-variant'>Shipping: </p>
                            <p className='text-secondary font-medium'>Free</p>
                        </div>
                        <div className='flex justify-between text-h3 pt-sm border-t border-slate-100'>
                            <span className='font-h1 text-h3'>Total</span>
                            <span className='font-h1 text-h3 text-primary'>${totalAmount.toFixed(2)}</span>
                        </div>
                        <button className='w-full bg-[rgb(13,28,47)] text-white py-4 rounded-xl font-label-sm mt-md hover:bg-slate-800 transition-colors shadow-lg'>
                            Checkout Now
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartView;
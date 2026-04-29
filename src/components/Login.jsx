import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import BagLogo from "../assets/Baglogo.png";
import Shoppingimg from "../assets/decoratedimage.png";
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (!name.trim()) return toast.error('Please enter your name');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            return toast.error('Please enter a valid email');
        dispatch(login({ name, email }));
    };

    return (
        <div className='min-h-screen flex items-center justify-center px-8 py-16 bg-surface'>
            <div className='w-full max-w-[440px] flex flex-col gap-8'>

                {/* Logo + heading */}
                <div className='text-center space-y-2'>
                    <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 mb-4 shadow-lg shadow-indigo-500/10'>
                        <img
                            src={BagLogo}
                            alt="Bag Logo"
                            className="w-6 h-6"
                        />
                    </div>
                    <h1 className='text-3xl font-bold text-slate-900 tracking-tight'>
                        Essence
                    </h1>
                    <p className='text-sm text-slate-500 max-w-[320px] mx-auto'>
                        Enter your details to access your premium shopping experience.
                    </p>
                </div>

                {/* Card */}
                <div className='bg-white rounded-xl shadow-sm p-8 flex flex-col gap-5 border border-slate-100'>
                    {/* ✅ removed onClick from button — form onSubmit handles it! */}
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>

                        {/* Name field */}
                        <div className='flex flex-col gap-1.5 mb-5'>
                            <label className='text-sm font-medium text-slate-700 text-left'>
                                Name
                            </label>
                            <input
                                className='w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition'
                                placeholder="Your name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email field */}
                        <div className='flex flex-col gap-1.5 mb-5'>
                            <label className='text-sm font-medium text-slate-700 text-left'>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition'
                                placeholder="you@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)} // ✅ simplified!
                                required
                            />
                        </div>

                        {/* ✅ type="submit" — no onClick needed! */}
                        <button
                            type="submit"
                            className='w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 mt-1'
                        >
                            Login
                        </button>
                    </form>
                </div>

                {/* ✅ loading="lazy" added to fix LCP! */}
                <div className='relative overflow-hidden rounded-xl bg-slate-950 aspect-[2/1] group shadow-xl'>
                    <img
                        alt="Minimalist shop interior"
                        loading="lazy"  // ✅ fixes LCP!
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700"
                        src={Shoppingimg}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent'>
                        <div className='absolute bottom-10 left-5'>
                            <p className='text-left text-white/70'
                                style={{ fontSize: 'var(--font-size-h3)' }}>
                                New Collection
                            </p>
                            <h3 className='text-white text-[18px]'>
                                Curated for the modern minimalist
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
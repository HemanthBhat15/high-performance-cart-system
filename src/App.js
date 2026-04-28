
import './App.css';
import CartView from './features/counter/CartView';
import ProductList from './features/counter/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';
import Login from './components/Login';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <ToastContainer/>
      {isLoggedIn ? (
        <>
          <header className='bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-[0_4px_12px_rgba(15,23,42,0.04)] sticky top-0 z-50'>
            <div className='max-w-[1280px] mx-auto px-8 flex justify-between items-center h-16 w-full'>
              <p className='text-xl font-black tracking-tighter text-slate-900 dark:text-white font-h2'>Essence</p>
              <div className='flex items-center gap-4'>
                <div className='hidden sm:flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg px-3 py-1.5 input-focus'>
                  <input className='bg-transparent border-none focus:ring-0 text-sm w-48 text-slate-600' type="text" placeholder='search products ..'  value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}  />
                </div>
                <button className='text-red-800' onClick={() => dispatch(logout())}>Logout</button>
              </div>
            </div>
          </header>

          <div className="max-w-[1280px] mx-auto px-8 py-12">
            <div className="grid grid-cols-12  gap-4 items-start">
              <ProductList searchQuery= {searchQuery}/>
              <CartView />
            </div>
          </div>
        </>
      ) : (
        <Login />  // show login form if not logged in
      )}
    </div>
  );
}

export default App;

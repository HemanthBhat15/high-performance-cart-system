import './App.css';
import CartView from './features/counter/CartView';
import ProductList from './features/counter/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Shop from './pages/shop';
function App() {
  const [logoutmodal, setLogoutmodal] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (!auth) return;

    const remainingTime = auth.expiry - Date.now();

    if (remainingTime <= 0) {
      dispatch(logout());
    } else {
      const timer = setTimeout(() => {
        dispatch(logout());
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <ToastContainer />
      {logoutmodal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-4 rounded-lg'>

            <h2 className='text-2xl font-bold'>Logout</h2>
            <p className='text-gray-600 mb-4'>Are you sure you want to logout?</p>
            <div className='flex justify-center gap-2'>
              <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={() => setLogoutmodal(false)}>Cancel</button>
              <button className='bg-red-500 text-white p-2 rounded-lg' onClick={() => {
                dispatch(logout());
                setLogoutmodal(false);
              }}>Logout</button>
            </div>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <header className='bg-white border-b shadow sticky top-0 z-50'>
          <div className='max-w-[1280px] mx-auto px-8 flex justify-between items-center h-16'>
            <p className='text-xl font-bold'>Essence</p>

            <button onClick={() => setLogoutmodal(true)}>
              Logout
            </button>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
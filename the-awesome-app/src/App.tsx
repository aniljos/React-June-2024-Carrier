import React, { Suspense, useContext } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import EditProduct from './components/EditProduct';
import ProtectedRoute from './components/ProtectedRoute';
import ViewCart from './components/ViewCart';
import { AppThemeContext } from './context/AppThemeContext';

//import GadgetStore from './components/GadgetsStore';
const GadgetStore = React.lazy(() => import('./components/GadgetsStore'));
//import ListProducts from './components/ListProducts';
const ListProducts = React.lazy(() => import('./components/ListProducts'));


function App() {

  const theme = useContext(AppThemeContext);

  function changeTheme(){

    if(theme.setMode){
      //theme.setMode(theme.mode === 'light' ? 'dark' : 'light');
      theme.setMode(theme.mode === 'light' ? {type: 'SET_DARK_MODE'} : {type: 'SET_LIGHT_MODE'});
    }
   
  }

  return (

    <Router>
      <div className='container'>
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">React</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gadgets">Gadgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewcart">View Cart</Link>
              </li>
              <li className="nav-item">
                <button className='btn btn-warning' onClick={changeTheme}>Switch Theme</button>
              </li>
            </ul>
          </div>
        </nav>
        <main style={{border: "1px solid blue", minHeight: "400px", padding: '10px'}}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Message text='Welcome to React' color='blue' />} />
              <Route path='/counter' element={<Counter initValue={10} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<ProtectedRoute> <ListProducts /></ProtectedRoute>} />
              <Route path="/products/:id" element={<EditProduct/>}/>
              <Route path='/gadgets' element={<GadgetStore />} />
              <Route path='/viewcart' element={<ViewCart />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;

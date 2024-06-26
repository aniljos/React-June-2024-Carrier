import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import ProtectedRoute from './components/ProtectedRoute';
import GadgetStore from './components/GadgetsStore';

function App() {
  return (

    <Router>
      <div className='container'>
        <nav className="navbar navbar-dark bg-dark">
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
            </ul>
          </div>
        </nav>
        <main style={{border: "1px solid blue", minHeight: "400px", padding: '10px'}}>
            <Routes>
              <Route path='/' element={<Message text='Welcome to React' color='blue' />} />
              <Route path='/counter' element={<Counter initValue={10} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<ProtectedRoute> <ListProducts /></ProtectedRoute>} />
              <Route path="/products/:id" element={<EditProduct/>}/>
              <Route path='/gadgets' element={<ProtectedRoute> <GadgetStore /></ProtectedRoute>} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

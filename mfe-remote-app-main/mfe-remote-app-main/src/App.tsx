
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React, { Suspense } from "react";
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ListCustomers from './components/ListCustomers';
import EditCustomer from './components/EditCustomer';

function App() {

    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">React MFE Remote</Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customers">Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<Message/>} />
                      <Route path="/counter" element={<Counter initialValue={4}/>} />
                      <Route path="/login" element={<Login/>} />
                      {/* <Route path="/customers" element={<ProtectedRoute> <ListCustomers/> </ProtectedRoute>} /> */}
                      <Route path="/customers" element={<ListCustomers/> } />
                      <Route path="/edit-customer" element={<EditCustomer/>} />
                      
                    </Routes>
                </Suspense>

            </main>
        </Router>
    )
}

export default App;
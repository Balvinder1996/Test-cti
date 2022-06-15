import React,{useState,useEffect} from 'react';
import Authentication from './Auth';
import Navbar from './Navbar/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AddProduct from './Admin/addProduct';
import ProductList from './Admin';
import Home from './User/home';
import AddCart from './User/add-cart';
import Footer from './Footer';
import { useStore } from '../store';

const Routing = () => {
    const [token, setToken] = useState(false);
    const [admin, setAdmin] = useState(false);
    const {handleToken , handleAdmin ,  tokenStatus, adminStatus } = useStore()

    
    // useEffect(() => {
    //     console.log(tokenStatus,adminStatus)
    //     let getToken = JSON.parse(localStorage.getItem('tokenCti'));
    //     let getAdmin = JSON.parse(localStorage.getItem('admin'));
    //     if (getToken) {
    //         setToken(true)
    //         if (getAdmin === "true") {
    //             setAdmin(true)
    //         }
    //     }
    // }, [])

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    {
                        (token || tokenStatus) ? (admin || adminStatus) ? 
                       <>
                        <Route path="/home" element={<ProductList/>} />
                        <Route path="/add-product" element={<AddProduct/>} />
                        </>

                            :
                       <>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/add-cart" element={<AddCart/>} />
                        </>
                            :
                            <Route path="/" element={<Authentication />} />
                    }

                </Routes>
                <Footer />
            </Router>
        </>
    )
}
export default Routing
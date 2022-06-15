import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AiOutlineUserDelete } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { useStore } from '../../store';

const Navbar = () => {

    const [token, setToken] = useState(false);
    const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();

    const {handleToken , handleAdmin ,  handleTokenOut , handleAdminOut ,tokenStatus, adminStatus } = useStore()

    // useEffect(() => {

    //     let getToken = JSON.parse(localStorage.getItem('tokenCti'));
    //     let getAdmin = JSON.parse(localStorage.getItem('admin'));
    //     if (getToken) {
    //         setToken(true)
    //         if (getAdmin === "true") {
    //             setAdmin(true)
    //         }
    //     }
    // }, [])

    const handleSignOut = (e) =>
    {
        e.preventDefault();
        localStorage.removeItem("tokenCti");
        localStorage.removeItem("admin");
        handleTokenOut();
        handleAdminOut();
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-color-nb min-height-nb">
                <div className="container ">
                    <Link className='text-white text-decoration-none' to='/'><span className='navbar-brand-heading'><AiFillShopping className="me-2 h3" />Shoopy Mart</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex align-items-center  ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                tokenStatus || token ?
                                    <>
                                        {
                                            adminStatus  || admin? 
                                            <>
                                              <li className="nav-item me-5">
                                                    <Link to="/home" className='text-white text-decoration-none'>
                                                        Product List
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/add-product" className='text-white text-decoration-none'>
                                                        Add product
                                                    </Link>
                                                </li>
                                            </>
                                            :
                                            <>
                                             <li className="nav-item me-5">
                                                    <Link to="/home" className='text-white text-decoration-none'>Products</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/add-cart" className='text-white text-decoration-none'>
                                                        <AiOutlineShoppingCart className="adminIcon" />
                                                    </Link>
                                                </li>
                                            </>
                                           
                                        }
                                    </>
                                    : null
                            }

                        </ul>
                       {
                        tokenStatus || token ?
                        <div className='d-flex align-items-center mt-2'>
                        <ul className='d-flex align-items-center'>
                            <li class="nav-item dropdown no-bullets">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <AiOutlineUserDelete className='adminIcon' />
                                </a>
                                <ul class="dropdown-menu text-white" aria-labelledby="navbarDropdown">
                                    <li><Link to='/home' className="dropdown-item"><AiOutlineUser className="me-2" /> Profile</Link></li>
                                    <li><Link to='/' className="dropdown-item" onClick={handleSignOut}><FaSignOutAlt className="me-2" />Sign out</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                        : null
                       }
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
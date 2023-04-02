import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gol-logo 1.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    let [open, setOpen] = useState(false);
    const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    console.log(user, 'this is user');

    const logout = () => {
        signOut(auth)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div style={{ paddingTop: '30px' }} class="container-fluid d-flex align-items-center align-middle">
                    <div className='navLogo me-5' class="nav-item " style={{ paddingleft: '87px' }}>
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <button class="navbar-toggler menuBtn border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link to='/findReservations' class="nav-link active" aria-current="page" href="findReservations">Find Reservations</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/support' class="nav-link active" aria-current="page" href="#">Suport</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Packages</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">About Lakshadweep</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Gol</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/dashboard'} class="nav-link active" aria-current="about" href="#about">Dashboard</Link>
                            </li>
                        </ul>

                        <div class="d-lg-flex align-items-center ">
                            {user?.email ?
                                <button
                                    onClick={() => logout()}
                                    class="border-0 signup" type="submit">LOGOUT</button>
                                :
                                <div class="d-lg-flex align-items-center text-center mx-auto d-lg-flex align-items-center ">
                                    <p class="nav-item text-center pt-3 mx-auto">
                                        <Link to={'/login'} class="nav-link fw-bolder active" aria-current="page">login</Link>
                                    </p>
                                    <Link to={'/register'}>
                                        <button class="border-0 signup" type="submit">Signup</button>
                                    </Link>
                                </div>
                            }
                        </div>

                        {/* {user?.email ?
                            <>

                                <button onClick={() => logout()} className='btn p-3 mt-2 bg-green-600 hover:bg-green-700 '>LOG OUT</button>
                            </>
                            : <li onClick={() => setOpen(!open)} className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '>
                                <Link to="/login" className='text-lg text-gray-200 p-2 hover:underline translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-red-600 font-semibold transition-all duration-400'>
                                    LOGIN
                                </Link>
                            </li>

                        } */}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

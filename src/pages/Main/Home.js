import React from 'react';
import logo from '../../assets/gol-logo 1.png'
import bannerimage from '../../assets/banner image.png'


import './home.css'
import Fling from '../../components/Fling';
import Packages from '../../components/Packages/Packages';
import IslandStay from '../../components/Island/IslandStay';
import Contact from '../../components/Contact/Contact';
import Testmonial from '../../components/Testmonial/Testmonial';
import visitIcon from '../../assets/Vector.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='Banner'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div style={{ paddingTop: '30px' }} class="container-fluid d-flex align-items-center align-middle">
                        <div className='navLogo me-5' class="nav-item " style={{ paddingleft: '87px' }}>
                            <img src={logo} alt="" />
                        </div>
                        <button class="navbar-toggler menuBtn border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">



                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#FindReservations">Find Reservations</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Packages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About Lakshadweep</a>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/about'} class="nav-link active" aria-current="page" href="#about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Gol</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Suport</a>
                                </li>



                            </ul>

                            <form class="d-lg-flex">
                                <p class="nav-item text-center mx-auto">
                                    <Link to={'/'} class="nav-link fw-bolder active" aria-current="page" href="#">login</Link>
                                </p>

                                <button class="border-0 signup" type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* banner  start*/}
                <div className='bannerContainer'>

                    <div class="row d-flex align-items-center align-middle">

                        <div class="col-sm-6">
                            <div class="text-center text-md-start">
                                <button className='visitButton border-0 px-2  d-flex align-items-center gap-2 align-middle rounded-pill'>Visit <img style={{ width: '20px' }} src={visitIcon} alt="" /></button>
                                <h2 className='title'>The Exotic <span className='titleColor'>Lakshadweep</span> Islands</h2>
                                <button className='bannerButton'>Discover Now</button>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="">
                                <img className='bannerImage' src={bannerimage} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <Fling /> */}
            <Packages />
            <IslandStay />
            <Contact />
            <Testmonial />
        </>
    );
};

export default Home;

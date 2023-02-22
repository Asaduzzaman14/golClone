import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Navbar from '../../layout/Navbar';
import image from '../../assets/support/portrait-excited-young-girl-holding-mobile-phone.png'
import './support.css'

const Support = () => {
    return (
        <>
            {/* nabvar component */}
            <Navbar />

            <div>

                <div className=' supportBgImage'>
                    <h2 className='pageTitle'>Support</h2>
                </div>

                {/* Frequently asked questions */}
                <div>
                    <div className='descriptions'>
                        <h2 className='packagesTitle'>Frequently asked questions</h2>
                        <p className=''>Have questions ? We’re here to help.</p>
                    </div>

                    <div class="input-group w-75 mx-auto mb-3">
                        <input type="text" class="form-control shadow-none w-75 mx-auto" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn searchBtn btn-outline-secondary" type="button" id="button-addon2"><AiOutlineSearch className='fs-1' /></button>
                    </div>


                    <div>

                        {/***************************/}
                        {/* accordion section */}
                        {/**************************/}


                        <div class="accordion1" id="accordionPanelsStayOpenExample">

                            <div class="accordion-item shadows">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button collapsed text-start text-dark shadow-none acrodinoTitle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        What is the most popular season to visit the Maldives?
                                    </button>
                                </h2>

                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body textColor text-start">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item shadows">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed text-start text-dark shadow-none acrodinoTitle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        When should I book the Maldives Tour package?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item shadows">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed text-start text-dark shadow-none acrodinoTitle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Do I need a visa to visit Maldives?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item shadows">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                    <button class="accordion-button collapsed text-start text-dark shadow-none acrodinoTitle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        Do I need a visa to visit Maldives?
                                    </button>
                                </h2>

                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/***************************/}
                        {/* get in tuch section */}
                        {/**************************/}


                        <div className='questionsSection'>
                            <div className='box'>
                                <div className=''>
                                    <h2 className='getIn'>Still have questions ?</h2>
                                    <p className='description'>Can’t find the answer you’re looking for ? Please chat to our friendly team</p>
                                    <button className='touchBtn'>Get in touch</button>
                                </div>

                                <div className='sectionImages '>
                                    <div className='imagesBg w-100'>
                                        <img src={image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Support;
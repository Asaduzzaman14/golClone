import React from 'react';

import './fling.css'

const Fling = () => {
    return (
        <div className='flightSection'>
            <div className='boxShadow rounded'>

                <h3 className='flingTitle text-start'>Where are you flying? </h3>
                <div className='row g-2'>

                    <div className='col-6' >
                        <input className='' type="text" />
                    </div>
                    <div className='col-6'>
                        <input className='' type="text" />
                    </div>
                    <div className='col-6'>
                        <input type="text" />
                    </div>
                    <div className='col-6 '>
                        <input type="text" />
                    </div>
                </div>

                <div className=' d-flex '>
                    <p>+ Add prommo code</p>
                    <button className='flightButton'>Show Flight</button>
                </div>
            </div>

        </div>
    );
};

export default Fling;
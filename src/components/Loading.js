import React from 'react';

const Loading = () => {
    return (
        <div className='h-50 mt-40' style={{ marginTop: '40%' }}>
            <div class="spinner-border " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
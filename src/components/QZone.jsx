import React from 'react';
import playground from '../assets/playground.png'
import swim from '../assets/swimming.png'
import classes from '../assets/class.png'

const QZone = () => {
    return (
        <div className='mt-4 bg-gray-100'>
            <h2 className='font-semibold text-left pl-4 pt-4'>Q Zone</h2>
            <img className='m-4 pb-8' src={playground} />
            <img className='m-4 pb-8' src={swim} />
            <img className='m-4 pb-8' src={classes} />
        </div>
    );
};

export default QZone;
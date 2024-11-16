import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
     <div className='flex gap-4 items-center'>
        <div className='bg-[#D72050] px-4 py-2 text-white'>Latest</div>
        <Marquee className='font-semibold gap-8'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deserunt?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deserunt?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deserunt?</p>
        </Marquee>
        </div>
     
    );
};

export default LatestNews;
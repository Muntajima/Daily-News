import React from 'react';
import title from '../assets/title.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-[450px]' src={title} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;
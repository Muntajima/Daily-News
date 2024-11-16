import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import fb from '../assets/fb.png'
import insgram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const FindUs = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-left mb-4'>Find Us On</h2>
            <div className='*:w-full text-left join join-vertical bg-base-100 flex rounded-none'>
                <button className='btn btn-outline join-item justify-start font-normal'><img src={fb}/> Facebook</button>
                <button className='btn btn-outline join-item justify-start font-normal'><img src={insgram}/> Instragram</button>
                <button className='btn btn-outline join-item justify-start font-normal'><img src={twitter}/> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;
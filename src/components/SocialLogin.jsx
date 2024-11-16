import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='mb-8'>
            <h2 className='font-semibold text-left pb-4'>Login With</h2>
            <div className='*:w-full space-y-2 *:font-normal'>
                <button className='btn btn-outline border-2 border-blue-500 text-blue-500'><FaGoogle/>Login with Google</button>
           
                <button className='btn btn-outline'><FaGithub/>Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
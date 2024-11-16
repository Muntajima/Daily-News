import React from 'react';
import Header from './Header';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import LeftNavbar from './LeftNavbar';
import { Outlet } from 'react-router-dom';
import RightNavbar from './RightNavbar';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='mt-4'>
                    <LatestNews/>
                </section>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid md: grid-cols-12 gap-3 mt-8'>
                <aside className='left col-span-3'>
                    <LeftNavbar/>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar/>
                </aside>
            </main>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from './Header';
import LatestNews from './LatestNews';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='mt-4'>
                    <LatestNews/>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default Home;
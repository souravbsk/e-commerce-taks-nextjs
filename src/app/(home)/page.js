import React from 'react';
import Banner from './Banner';
import HomeProduct from './HomeProduct';

const page = () => {
    return (
        <main className='container'>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
        </main>
    );
};

export default page;
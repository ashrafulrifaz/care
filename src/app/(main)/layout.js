import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <body className="min-h-full flex flex-col">
            <div className="px-[60px]">
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </body>
    );
};

export default Mainlayout;
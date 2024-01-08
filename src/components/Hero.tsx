import Image from 'next/image';
import React from 'react';
import Searchbar from './SearchBar';

const Hero: React.FC = () => {
    return (
        <section className="bg-ui-yellow/50 overflow-hidden">
            <Image
                className=' absolute right-36 top-14'
                src="/images/rhombus-full.svg"
                alt="rhombus"
                width={450}
                height={450} />
            <Image
                className=' absolute right-0 top-6 '
                src="/images/rhombus.svg"
                alt="rhombus"
                width={450}
                height={450} />
            <div className="max-w-7xl mx-auto min-h-96 pt-20 px-4 relative">
                <div className=''>
                    <h1 className='w-full text-ui-primary text-6xl font-bold'>Stay at Home. <br />Consult Online</h1>
                    <p className='w-full text-ui-primary text-xl font-normal leading-10'>Schedule Your Next Medical Visit Online Today</p>
                    <Searchbar />
                </div>
                <Image
                    className='absolute top-0 right-0'
                    src="/hero.png"
                    alt="hero images"
                    width="780"
                    height="625"
                ></Image>
                <div className='h-24'></div>
            </div>
        </section>
    );
};

export default Hero;

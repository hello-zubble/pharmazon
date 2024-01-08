import Image from 'next/image';
import React from 'react';
import Searchbar from '../etc/SearchBar';
import Link from 'next/link';
import { LinkButton, PrimaryButton } from '../Buttons';

const Hero: React.FC = () => {
    return (
        <section className="bg-ph-yellow/15">
            <div className='max-w-[1440px] mx-auto relative -translate-y-24'>
                <Image
                    className=' absolute right-32 top-14 -z-1'
                    src="/images/rhombus-full.svg"
                    alt="rhombus"
                    width={450}
                    height={450} />
                <Image
                    className=' absolute right-2 top-14 -z-1'
                    src="/images/rhombus.svg"
                    alt="rhombus"
                    width={400}
                    height={400} />
            </div>
            <div className="max-w-7xl mx-auto min-h-96 px-4 relative  translate-y-24">
                <div className=''>
                    <h1 className='w-full text-ui-primary text-6xl font-bold'>Stay at Home. <br />Consult Online</h1>
                    <p className='w-full text-ui-primary text-xl font-normal leading-10'>Schedule Your Next Medical Visit Online Today</p>
                    <Searchbar />
                </div>
                <Image
                    className='absolute top-0 right-0 -z-1 -translate-y-24'
                    src="/hero.png"
                    alt="hero images"
                    width="780"
                    height="625"
                ></Image>
                <div className='relative'>
                    <div className='flex justify-center'>
                        <div className="w-[75rem] h-[20rem]  top-[36rem]  flex items-center justify-center bg-[rgba(255,255,255,0.3)] rounded-[10px] mx-auto mt-14">
                            <div className=' w-[70rem] h-[16rem] flex justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-[10px] mx-auto my-auto px-8'>
                                <div className='flex justify-center items-center rounded-lg gap-2 bg-white opacity-100'>
                                    <div className='flex items-center flex-col p-4 bg-[#F2F9FF]/50'>
                                        <div className=" w-3/4 h-20 text-center text-blue-400 text-lg font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                                        <PrimaryButton className='h-16 text-xl text-bold w-2/3 rounded-xl'>Book an Follow Up</PrimaryButton>
                                    </div>
                                    <div className='flex items-center flex-col p-4 bg-[#F2F9FF]/50'>
                                        <div className="w-3/4 h-20 text-center text-blue-400 text-lg font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                                        <PrimaryButton className='h-16 text-xl text-bold w-2/3 rounded-xl'> Book an Follow Up </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Hero;

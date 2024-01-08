import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SecondaryButton } from '../Buttons';

const Tutorial: React.FC = () => {
    return (
        <section className='bg-ph-yellow/15'>
            <div className='relative  pt-24 max-w-7xl mx-auto'>
                <Image
                    className='absolute right-[26rem] top-[15rem] z-20'
                    src="/images/dots.svg"
                    alt="dots"
                    width={128}
                    height={128} />
                <Image
                    className=' absolute -right-4 bottom-32 leading-[3rem] -z-1 '
                    src="/icons/green-mark.svg"
                    alt="green mark"
                    width={47}
                    height={47} />
                <div className='flex justify-between items-center'>
                    <h3 className='text-ui-primary text-5xl font-extrabold'>Simplified Online Healthcare Access</h3>
                    <Link href="#">
                        <SecondaryButton className='h-14 text-lg font-semibold rounded-lg'>Book an Appointment </SecondaryButton>
                    </Link>
                </div>
                <div className='flex justify-between'>
                    <div className='mt-24 flex flex-col gap-7'>
                        <div className='flex items-center'>
                            <h5 className='text-ui-primary w-24 h-24 flex justify-center items-center text-5xl font-bold bg-ph-yellow/15 rounded-full'>1</h5>
                            <div className='pl-12'>
                                <p className='text-ui-primary text-2xl font-bold mb-3'>Step 1 text goes here</p>
                                <p className='text-ui-primary text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h5 className='text-ui-primary h-24 w-24 flex justify-center items-center text-5xl font-bold bg-ph-yellow/15 rounded-full'>2</h5>
                            <div className='pl-12'>
                                <p className='text-ui-primary text-2xl font-bold mb-3 '>Step 1 text goes here</p>
                                <p className='text-ui-primary text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h5 className='text-ui-primary h-24 w-24 flex justify-center items-center text-5xl font-bold bg-ph-yellow/15 rounded-full'>3</h5>
                            <div className='pl-12'>
                                <p className='text-ui-primary text-2xl font-bold mb-3'>Step 2 text goes here</p>
                                <p className='text-ui-primary  text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    {/* tutorial image */}
                    <div className='flex h-[40rem] items-center justify-center'>
                        <Image
                            className=' w-[32rem] h-[20rem] z-10'
                            src="/images/tutorial.jpeg"
                            alt="tutorial"
                            width={400}
                            height={300} />
                        <Image
                            className='absolute z-20'
                            src="/icons/play.svg"
                            alt="play"
                            width={80}
                            height={80} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorial;

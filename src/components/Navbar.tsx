import Link from 'next/link';
import React from 'react';
import { LinkButton, PrimaryButton } from './Buttons';

const Navbar: React.FC = () => {
    return (
        <div className="bg-ph-yellow/15">
            <nav className="pt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 z-10 relative">
                        <div className="flex items-center justify-between flex-1">
                            <div className="">
                                <Link href="/">
                                    <h1 className='text-navy-blue text-3xl font-bold leading-loose cursor-pointer'>Pharmazon</h1>
                                </Link>
                            </div>
                            <div className="ml-10 flex space-x-4 gap-6 justify-center items-baseline">
                                <a href="#" className="text-ui-primary  px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-ui-primary  px-3 py-2 rounded-md text-sm font-medium">About us</a>
                                <a href="#" className="text-ui-primary  px-3 py-2 rounded-md text-sm font-medium">Clinics</a>
                                <a href="#" className="text-ui-primary  px-3 py-2 rounded-md text-sm font-medium">Prescribers</a>
                                <a href="#" className="text-ui-primary  px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                            <div className='flex items-baseline gap-5'>
                                <LinkButton href=''>Sign In</LinkButton>
                                <PrimaryButton>Register</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

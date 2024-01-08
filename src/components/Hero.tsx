import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-blue-500 text-white py-10">
            <h1 className="text-4xl font-bold">Welcome to Pharmazon</h1>
            <p className="text-lg mt-4">Your one-stop shop for all your pharmaceutical needs</p>
            <button className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md">Get Started</button>
        </div>
    );
};

export default Hero;

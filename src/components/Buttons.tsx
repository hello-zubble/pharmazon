import Link from 'next/link';
import React, { ReactNode, MouseEventHandler } from 'react';

type PrimaryButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
};
    
type LinkButtonProps = {
    children: ReactNode;
    href: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
    return (
        <button className="bg-ui-primary hover:bg-ui-primary/90 text-white py-3 px-6 rounded">
            {children}
        </button>
    );
};

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
    return (
        <button className="bg-ui-secondary hover:bg-ui-secondary/90 text-white py-3 px-6 rounded">
            {children}
        </button>
    );
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
    return (
        <Link href={href} className="text-ui-primary hover:text-ui-primary/90py-3 px-6">
            {children}
        </Link>
    );
};

export { PrimaryButton,SecondaryButton,LinkButton };

import Link from 'next/link';
import React, { ReactNode } from 'react';

interface AnchorProps {
    className?: string;
    href?: string;
    children: ReactNode;
}

export const Anchor: React.FC<AnchorProps> = ({ href, className, children }) => {
    return (
        <Link href={href??"#"} className={`flex justify-center whitespace-nowrap py-2 px-5 rounded md:border-0 md:px-2 dark:text-white hover:bg-gray-200 hover:text-black transition-colors ${className}`}>
            {children}
        </Link>
    );
};
import { ReactNode } from "react";

export interface MessageProps {
    children: ReactNode;
}

export const Bot: React.FC<MessageProps> = ({ children }) => {
    return (
        <div className="flex justify-start w-full">
            <div className="flex w-auto h-auto bg-gray-400 rounded-lg m-4 max-w-md text-black p-2">
                {children}
            </div>
        </div>
    );
};

export const User: React.FC<MessageProps> = ({ children }) => {
    return (
        <div className="flex justify-end w-full">
            <div className="flex w-auto h-auto bg-gray-200 rounded-lg m-4 max-w-md text-black p-2">
                {children}
            </div>
        </div>
    );
};
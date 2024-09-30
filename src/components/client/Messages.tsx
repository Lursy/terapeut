import { ReactNode } from "react";

export interface MessageProps {
    children: ReactNode;
}

export const Bot: React.FC<MessageProps> = ({ children }) => {
    return (
        <div className="flex justify-start w-full">
            <div className="flex w-auto h-auto bg-gray-400 rounded-lg m-4 max-w-md text-black p-2">
                {
                    children ? (
                        children
                    ) : (
                        <div className="flex flex-row p-2">
                            <div className="animate-pulse bg-gray-500 w-8 h-4"></div>
                            <div className="animate-pulse bg-gray-500 w-24 h-4 ml-2"></div>
                        </div>
                    )
                }
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
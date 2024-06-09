import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import "../../css/app.css"

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 ">
            
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 position-relative 
            bg-login
            dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">                
                {children}
            </div>

        </div>
    );
}

import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-2 sm:pt-0  bg-cover bg-center"
        style={{ 
            backgroundImage: "url('images/hi.jpg')",
            minHeight: "100vh",
        }}
        >
           

            <div  className="w-full  mt-8 px-10 py-4   overflow-hidden sm:rounded-lg flex justify-center items-center h-full">
                {children}
            </div>
        </div>
    );
}

// import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {

//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password');
//         };
//     }, []);

//     const handleOnChange = (event) => {
//         setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
//     };

//     const submit = (e) => {
//         e.preventDefault();
//         post(route('login'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

//             <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
//                 <div className="mb-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={handleOnChange}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mb-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
//                         autoComplete="current-password"
//                         onChange={handleOnChange}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="flex items-center mb-4">
//                     <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
//                     <span className="ml-2 text-sm text-gray-600">Remember me</span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="text-sm text-gray-600 hover:text-gray-900"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}
//                     <PrimaryButton disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//                 <div className="mt-4">
//                     <p className="text-sm text-gray-600">Don't have an account? <Link href={route('register')} className="text-indigo-600 hover:text-indigo-800">Register here</Link>.</p>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import axios from 'axios';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGoogle } from 'react-icons/fa';
import './style.css';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        // If needed, handle redirection after authentication with Google here
    }, []);

    const handleOnChange = (event) => {
        const { name, type, checked, value } = event.target;
        setData(name, type === 'checkbox' ? checked : value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className='login-container'>
            <div className='skewed-container'>
                <div className='welcome-half'>
                    <img src="/logo1.png" alt="Logo" width={150} height={150} /><br /><br />
                    <h1><b>Welcome To Hotel Cozy Suites</b></h1><br />
                    <p>Please enter your username and password</p>
                </div>
                <div className='login-half'>
                    <Head title="Log in" />

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    <h2>Login</h2><br />
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" className='label'/>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" className='label' />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={handleOnChange}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" checked={data.remember} onChange={handleOnChange} />
                                <span className="label ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="text-center my-4">
                            <hr className="my-2" />
                            <span className="text-center font-bold">Or</span>
                            <div className="w-3/5 mx-auto mt-4">
                                <a href="/auth/google" className="google-login-link">
                                    <FaGoogle className="google-icon" />
                                    <span className="text-sm text-left">Continue with Google</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

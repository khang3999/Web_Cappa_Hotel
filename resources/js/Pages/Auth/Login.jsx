import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/app.css"

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="../images/logo.png" className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3 login-text">Sign in with</p>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary sign-in-icon btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary sign-in-icon btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary sign-in-icon btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 login-text">Or</p>
                                </div>

                                {/* Email input */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput type="email" id="email" value={data.email} className="form-control form-control-lg" placeholder="Enter a valid email address" autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)} />


                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                {/* Password input */}
                                <div data-mdb-input-init className="form-outline mb-3">
                                    <InputLabel htmlFor="password" value="Password" />
                                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)} />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400 text-light">Remember me</span>
                                    </div>
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-light text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <PrimaryButton className="ms-4 btn btn-primary" disabled={processing}>
                                        Log in
                                    </PrimaryButton>
                                    <p className="small fw-bold mt-2 pt-1 mb-0 text-light">Don't have an account? <a href={route('register')} className="link-warning text-register">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </GuestLayout>
    );
}

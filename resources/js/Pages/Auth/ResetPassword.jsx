import { useEffect } from 'react';
import React, { useState } from 'react';
import {  Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    const [EmailError, setEmailError] = useState("");
    const [NameError, setNameError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");


    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);


    function validateName(e) {
        const name = e.target.value;
        const nameRegex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u; // Regular expression for Vietnamese full name
        setNameError("");
        if (name === "") {
            return;
        }
        if (!nameRegex.test(name)) {
            setNameError("Invalid name");
        }
    }


    function validateEmail(e) {
        const email = e.target.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailError("");
        if (email === "") {

            return
        }
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");

        }
    }
    function validatePassword() {
        setPasswordError("");
        const password = data.password;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (password === "") {
            return;
        }
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number");
        }
    }
    function validateConfirmPassword() {
        setConfirmPasswordError("");
        if (data.password !== data.password_confirmation) {
            setPasswordError("Passwords do not match");
            setConfirmPasswordError("Passwords do not match");
        }
    }
    
    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <section className="vh-100 bg-image" >
                <div className="mask d-flex align-items-center h-100 ">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card bg-light opacity-75" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5 register-title">Reset Password</h2>
                                        <form onSubmit={submit}>                                        
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label text-dark"  htmlFor="email">Your Email</InputLabel>
                                                <TextInput
                                                    id="email"
                                                    name="email"
                                                    value={data.email}
                                                    className={`form-control form-control-lg ${EmailError ? 'error-animation is-invalid' : ''}`}
                                                    autoComplete="email"
                                                    isFocused={true}
                                                    onBlur={validateEmail} // Add onBlur event handler
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    required
                                                />

                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label text-dark" htmlFor="password" value="Password" />

                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className={`form-control form-control-lg ${PasswordError ? 'error-animation is-invalid' : ''}`}
                                                    onBlur={validatePassword} // Add onBlur event handler
                                                    autoComplete="new-password"
                                                    onCopy={(e) => e.preventDefault()}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    required
                                                />
                                                <InputError message={PasswordError || ''} className="mt-2" />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label text-dark"  htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    id="password_confirmation"
                                                    type="password"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className={`form-control form-control-lg ${ConfirmPasswordError ? 'error-animation is-invalid' : ''}`}
                                                    onCopy={(e) => e.preventDefault()}
                                                    autoComplete="new-password"
                                                    onBlur={validateConfirmPassword} // Add onBlur event handler
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    required
                                                />

                                            </div>

                                            <div className="flex items-center justify-end mt-4">
                                                <Link
                                                    href={route('login')}
                                                    className="underline text-sm text-dark dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 already-registered-link"
                                                >
                                                    Already registered?
                                                </Link>

                                                <PrimaryButton className="ms-4" disabled={processing} >
                                                    Reset
                                                </PrimaryButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

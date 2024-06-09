import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/app.css"

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
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

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <section className="vh-100 bg-image" >
                <div className="mask d-flex align-items-center h-100 ">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card bg-dark" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5 register-title">Create an account</h2>
                                        <form onSubmit={submit}>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label " htmlFor="name" value="Name">Your Name</InputLabel>
                                                <TextInput
                                                    id="name"
                                                    name="name"
                                                    value={data.name}
                                                    className="form-control form-control-lg"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    required
                                                />

                                                <InputError message={errors.name} className="mt-2" />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label" htmlFor="email">Your Email</InputLabel>
                                                <TextInput
                                                    id="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="form-control form-control-lg"
                                                    autoComplete="email"
                                                    isFocused={true}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    required
                                                />

                                                <InputError message={errors.email} className="mt-2" />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label" htmlFor="password" value="Password" />

                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="form-control form-control-lg"
                                                    autoComplete="new-password"
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    required
                                                />

                                                <InputError message={errors.password} className="mt-2" />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <InputLabel className="form-label" htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    id="password_confirmation"
                                                    type="password"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="form-control form-control-lg "
                                                    autoComplete="new-password"
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    required
                                                />

                                                <InputError message={errors.password_confirmation} className="mt-2" />
                                            </div>

                                            <div className="flex items-center justify-end mt-4">
                                                <Link
                                                    href={route('login')}
                                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                                >
                                                    Already registered?
                                                </Link>

                                                <PrimaryButton className="ms-4" disabled={processing}>
                                                    Register
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

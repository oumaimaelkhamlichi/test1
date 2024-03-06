import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    numero_telephone: '',
    date_naissance: '',
    nationalite: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const handleOnChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox' ? event.target.checked : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form className="flex bg-gray-100 rounded-lg p-8 space-y-6 w-3/4 mx-auto">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>

          <div className="mb-4">
            <InputLabel htmlFor="name" value="Name" />
            <TextInput
              id="name"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.name} className="mt-2 text-red-500" />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="numero_telephone" value="Phone Number" />
            <TextInput
              id="numero_telephone"
              name="numero_telephone"
              value={data.numero_telephone}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.numero_telephone} className="mt-2 text-red-500" />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="date_naissance" value="Date of Birth" />
            <TextInput
              id="date_naissance"
              name="date_naissance"
              value={data.date_naissance}
              type="date"
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.date_naissance} className="mt-2 text-red-500" />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="nationalite" value="Nationality" />
            <TextInput
              id="nationalite"
              name="nationalite"
              value={data.nationalite}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.nationalite} className="mt-2 text-red-500" />
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="mb-4">
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.email} className="mt-2 text-red-500" />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.password} className="mt-2 text-red-500" />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.password_confirmation} className="mt-2 text-red-500" />
          </div>

          <div className="flex justify-center">
            <Link
              href={route('login')}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Already registered?
            </Link>

            <PrimaryButton className="ml-4" disabled={processing}>
Register
            </PrimaryButton>
          </div>
        </div>
      </form>
    </GuestLayout>
  );
}
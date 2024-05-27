import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import './register.css';

export default function Register(props) {
  console.log(props.users);
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    cin: '',
    numero_telephone: '',
    date_naissance: '',
    nationalite: '',
    email: '',
    password: '',
    role: '',
    ville: '',
    adresse: '',
    pays: '',
    etat_civil: '',
    nombre_enfants: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <div className='register-container'>
      <div className='skewed-container'>
        <div className='welcome-half'>
          <img src="/logo1.png" alt="Hotel Logo" width={150} height={150} />
          <h1><b>Welcome To Hotel Cozy Suites</b></h1>
          <p>Please enter your username and password</p>
        </div>
        <div className='register-half'>
          <Head title="Register" />

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-section">
              <h2 className="form-title">Register</h2>
              
              <div className="form-group">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput id="name" name="name" value={data.name} onChange={handleOnChange} required />
                <InputError message={errors.name} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="cin" value="CIN" />
                <TextInput id="cin" name="cin" value={data.cin} onChange={handleOnChange} required />
                <InputError message={errors.cin} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="numero_telephone" value="Phone Number" />
                <TextInput id="numero_telephone" name="numero_telephone" value={data.numero_telephone} onChange={handleOnChange} required />
                <InputError message={errors.numero_telephone} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="nombre_enfants" value="Number of Children" />
                <TextInput id="nombre_enfants" name="nombre_enfants" value={data.nombre_enfants} onChange={handleOnChange} required />
                <InputError message={errors.nombre_enfants} className="input-error" />
              </div>

              <InputLabel value="État Civil" />
            <div>
              <label>
                <input
                  type="radio"
                  name="etat_civil"
                  value="célibataire"
                  checked={data.etat_civil === 'célibataire'}
                  onChange={handleOnChange}
                />
                Célibataire
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="etat_civil"
                  value="marié"
                  checked={data.etat_civil === 'marié'}
                  onChange={handleOnChange}
                />
                Marié
              </label>
            </div>
          
     

              <div className="form-group">
                <InputLabel htmlFor="date_naissance" value="Date of Birth" />
                <TextInput id="date_naissance" name="date_naissance" type="date" value={data.date_naissance} onChange={handleOnChange} required />
                <InputError message={errors.date_naissance} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="nationalite" value="Nationality" />
                <TextInput id="nationalite" name="nationalite" value={data.nationalite} onChange={handleOnChange} required />
                <InputError message={errors.nationalite} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="ville" value="City" />
                <TextInput id="ville" name="ville" value={data.ville} onChange={handleOnChange} required />
                <InputError message={errors.ville} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="adresse" value="Address" />
                <TextInput id="adresse" name="adresse" value={data.adresse} onChange={handleOnChange} required />
                <InputError message={errors.adresse} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="pays" value="Country" />
                <TextInput id="pays" name="pays" value={data.pays} onChange={handleOnChange} required />
                <InputError message={errors.pays} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="role" value="Role" />
                <TextInput id="role" name="role" value={data.role} onChange={handleOnChange} required />
                <InputError message={errors.role} className="input-error" />
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput id="email" type="email" name="email" value={data.email} onChange={handleOnChange} required />
                <InputError message={errors.email} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput id="password" type="password" name="password" value={data.password} onChange={handleOnChange} required />
                <InputError message={errors.password} className="input-error" />
              </div>

              <div className="form-group">
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                <TextInput id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} onChange={handleOnChange} required />
                <InputError message={errors.password_confirmation} className="input-error" />
              </div>

              <div className="form-footer">
                <Link
                  href={route('login')}
                  className="register-link"
                >
                  Already registered?
                </Link>

                <PrimaryButton className="register-button" disabled={processing}>
                  Register
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
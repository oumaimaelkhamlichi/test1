import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';
import Layout from '@/Pages/MyPages/Liens';
import './AjouterClient.css'; // Importez votre fichier de styles CSS

const AjouterClient = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        cin: '',
        email: '',
        date_naissance: '',
        numero_telephone: '',
        nationalite: '',
        password: '',
        password_confirmation: '',
        role: '',
        google_id: '',
        adresse: '',
        ville: '',
        pays: '',
        nombre_enfants: '',
        etat_civil: ''
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            post(route('users.store'), {
                onSuccess: () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Client has been successfully added.'
                    });
                    reset();
                },
                onError: () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to add Client. Please check the form fields.'
                    });
                }
            });
        } catch (error) {
            console.error('Error while submitting form:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add Client. Please try again later.'
            });
        }
    };

    return (
        <div className="client-container">
            <Layout />
            <div className='client-form'>
                <h1>Ajouter un Client</h1>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col1'>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={handleOnChange}
                                error={errors.name}
                                className="form-control"
                            />
                            {errors.name && <div className="error">{errors.name}</div>}

                            <InputLabel htmlFor="cin" value="CIN" />
                            <TextInput
                                id="cin"
                                name="cin"
                                type="text"
                                value={data.cin}
                                onChange={handleOnChange}
                                error={errors.cin}
                                className="form-control"
                            />
                            {errors.cin && <div className="error">{errors.cin}</div>}

                            {/* Ajoutez d'autres champs de saisie ici */}

                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={handleOnChange}
                                error={errors.password}
                                className="form-control"
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <div className='col2'>
                            {/* Ajoutez d'autres champs de saisie ici */}
                        </div>
                    </div>
                    <button type="submit" disabled={processing} className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="additional-info">
                {/* Div contenant le texte supplémentaire */}
                <p>Texte supplémentaire à afficher à côté du formulaire</p>
            </div>
        </div>
    );
};

export default AjouterClient;

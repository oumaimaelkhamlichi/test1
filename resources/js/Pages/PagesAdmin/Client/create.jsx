import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';
import Layout from '@/Pages/MyPages/Layout';

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

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const fieldsPerPage = 3; // Nombre de champs par page
    const indexOfLastField = currentPage * fieldsPerPage;
    const indexOfFirstField = indexOfLastField - fieldsPerPage;
    const currentFields = Object.keys(data).slice(indexOfFirstField, indexOfLastField);

    return (
        <div className="client-container">
            <Layout />
            <div className="client-form">
                <h1 className="text-2xl font-bold mb-4">Ajouter un Client</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentFields.map((fieldName, index) => (
                            <div key={index} className="flex flex-col">
                                <InputLabel htmlFor={fieldName} value={fieldName} />
                                <TextInput
                                    id={fieldName}
                                    name={fieldName}
                                    type="text"
                                    value={data[fieldName]}
                                    onChange={handleOnChange}
                                    error={errors[fieldName]}
                                    className="input-field"
                                />
                                {errors[fieldName] && <div className="text-red-500">{errors[fieldName]}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className={`btn ${currentPage === 1 ? 'btn-disabled' : 'btn-primary'}`}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className={`btn ${currentFields.length < fieldsPerPage ? 'btn-disabled' : 'btn-primary'}`}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentFields.length < fieldsPerPage}
                        >
                            Next
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={processing}>
                            Submit
                        </button>
                    </div>
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

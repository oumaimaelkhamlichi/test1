import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { FaUserShield, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const EditChambre = ({ chambre }) => {
    const { data, setData, put, processing, errors } = useForm({
        numero: chambre.numero || '',
        nom_chambre: chambre.nom_chambre || '',
        prix_chambre: chambre.prix_chambre || '',
        nbr_per: chambre.nbr_per || '',
        description_chambre: chambre.description_chambre || '',
        disponible: chambre.disponible || false,
        type_chambre_id: chambre.type_chambre_id || '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const fieldsPerPage = 4;

    const handleOnChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        setData(name, type === 'checkbox' ? checked : type === 'file' ? files[0] : value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            Inertia.put(route('chambres.update', chambre.id), data);
            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Chambre modifiée avec succès.',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Échec de la modification de la chambre. Veuillez réessayer plus tard.',
            });
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(fields.length / fieldsPerPage)) setCurrentPage(currentPage + 1);
    };

    const fields = [
        { id: 'numero', label: 'Numéro', type: 'text', value: data.numero, error: errors.numero },
        { id: 'nom_chambre', label: 'Nom Chambre', type: 'text', value: data.nom_chambre, error: errors.nom_chambre },
        { id: 'prix_chambre', label: 'Prix Chambre', type: 'number', value: data.prix_chambre, error: errors.prix_chambre },
        { id: 'nbr_per', label: 'Nombre de Personnes', type: 'number', value: data.nbr_per, error: errors.nbr_per },
        { id: 'description_chambre', label: 'Description Chambre', type: 'textarea', value: data.description_chambre, error: errors.description_chambre },
        { id: 'disponible', label: 'Disponible', type: 'checkbox', value: data.disponible, error: errors.disponible },
        { id: 'type_chambre_id', label: 'Type Chambre ID', type: 'text', value: data.type_chambre_id, error: errors.type_chambre_id },
        { id: 'image1', label: 'Image 1', type: 'file', value: data.image1, error: errors.image1 },
        { id: 'image2', label: 'Image 2', type: 'file', value: data.image2, error: errors.image2 },
        { id: 'image3', label: 'Image 3', type: 'file', value: data.image3, error: errors.image3 },
        { id: 'image4', label: 'Image 4', type: 'file', value: data.image4, error: errors.image4 },
    ];

    const startIndex = (currentPage - 1) * fieldsPerPage;
    const paginatedFields = fields.slice(startIndex, startIndex + fieldsPerPage);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <div className="flex items-center mb-6">
                    <FaUserShield size={24} className="mr-2 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-800">Modifier Chambre</h1>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                    {paginatedFields.map((field) => (
                        <div key={field.id} className="mb-4">
                            <InputLabel htmlFor={field.id} value={field.label} className="text-gray-700" />
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    value={field.value}
                                    onChange={handleOnChange}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : field.type === 'checkbox' ? (
                                <input
                                    type="checkbox"
                                    id={field.id}
                                    name={field.id}
                                    checked={field.value}
                                    onChange={handleOnChange}
                                    className="block mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <TextInput
                                    id={field.id}
                                    name={field.id}
                                    type={field.type}
                                    value={field.value}
                                    onChange={handleOnChange}
                                    error={field.error}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            )}
                            {field.error && <p className="text-red-500 text-sm mt-1">{field.error}</p>}
                        </div>
                    ))}
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50 flex items-center"
                        >
                            <FaArrowLeft />
                            <span className="ml-2">Précédent</span>
                        </button>
                        <button
                            type="button"
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(fields.length / fieldsPerPage)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50 flex items-center"
                        >
                            <span className="mr-2">Suivant</span>
                            <FaArrowRight />
                        </button>
                    </div>
                    <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditChambre;

import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaFlag, FaCalendarAlt, FaChild, FaHeart } from 'react-icons/fa';
import Layout from '@/Pages/MyPages/Liens';

const EditClient = ({ user }) => {
    const { data, setData, put, processing, errors } = useForm({
        cin: user.cin || '',
        name: user.name || '',
        email: user.email || '',
        telephone: user.numero_telephone || '',
        adresse: user.adresse || '',
        ville: user.ville || '',
        pays: user.pays || '',
        date_naissance: user.date_naissance || '',
        nombre_enfants: user.nombre_enfants || 0,
        etat_civil: user.etat_civil || 'célibataire',
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            Inertia.put(route('users.update', user.id), data);
            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Client modifié avec succès.',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Échec de la modification du client. Veuillez réessayer plus tard.',
            });
        }
    };

    return (
        <div>
            <Layout/>
             <div className="clients bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-white rounded shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6">Modifier un client</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <InputLabel htmlFor="cin" value="CIN" icon={<FaUser />} />
                            <TextInput
                                id="cin"
                                name="cin"
                                type="text"
                                value={data.cin}
                                onChange={handleOnChange}
                                error={errors.cin}
                                className="input"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="name" value="Nom" icon={<FaUser />} />
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={handleOnChange}
                                error={errors.name}
                                className="input"
                            />
                        </div>
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" icon={<FaEnvelope />} />
                        <TextInput
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleOnChange}
                            error={errors.email}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="telephone" value="Téléphone" icon={<FaPhone />} />
                        <TextInput
                            id="telephone"
                            name="telephone"
                            type="tel"
                            value={data.telephone}
                            onChange={handleOnChange}
                            error={errors.telephone}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="adresse" value="Adresse" icon={<FaMapMarkerAlt />} />
                        <TextInput
                            id="adresse"
                            name="adresse"
                            type="text"
                            value={data.adresse}
                            onChange={handleOnChange}
                            error={errors.adresse}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="ville" value="Ville" icon={<FaCity />} />
                        <TextInput
                            id="ville"
                            name="ville"
                            type="text"
                            value={data.ville}
                            onChange={handleOnChange}
                            error={errors.ville}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="pays" value="Pays" icon={<FaFlag />} />
                        <TextInput
                            id="pays"
                            name="pays"
                            type="text"
                            value={data.pays}
                            onChange={handleOnChange}
                            error={errors.pays}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="date_naissance" value="Date de Naissance" icon={<FaCalendarAlt />} />
                        <TextInput
                            id="date_naissance"
                            name="date_naissance"
                            type="date"
                            value={data.date_naissance}
                            onChange={handleOnChange}
                            error={errors.date_naissance}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="nombre_enfants" value="Nombre d'enfants" icon={<FaChild />} />
                        <TextInput
                            id="nombre_enfants"
                            name="nombre_enfants"
                            type="number"
                            value={data.nombre_enfants}
                            onChange={handleOnChange}
                            error={errors.nombre_enfants}
                            className="input"
                        />
                    </div>
                    <div>
                        <InputLabel value="État Civil" icon={<FaHeart />} />
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
                    </div>
                    <button type="submit" disabled={processing} className="btn-primary py-3 px-8 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200">
                        Modifier
                    </button>
                </form>
            </div>
        </div>
        </div>
       
    );
};

export default EditClient;

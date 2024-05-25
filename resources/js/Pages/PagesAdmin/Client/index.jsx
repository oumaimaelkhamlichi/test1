import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import Layout from '@/Pages/MyPages/Liens';
import Swal from 'sweetalert2';

const IndexClient = ({ users }) => {
  const [filterValue, setFilterValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  useEffect(() => {
    setFilteredUsers(filterUsers());
  }, [filterValue, users]);

  const filterUsers = () => {
    return users.filter(user => {
      const cin = user.cin ? user.cin.toLowerCase() : '';
      const name = user.name ? user.name.toLowerCase() : '';
      const nationality = user.nationalite ? user.nationalite.toLowerCase() : '';
      const city = user.ville ? user.ville.toLowerCase() : '';
      const filter = filterValue.toLowerCase();

      return (
        cin.includes(filter) ||
        name.includes(filter) ||
        nationality.includes(filter) ||
        city.includes(filter)
      );
    });
  };

  const deleteData = (id, cin) => {
    if (confirm(`Are you sure you want to delete the client's data with the CIN ${cin}?`)) {
      Inertia.delete(route('users.destroy', id)).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Client has been successfully deleted.'
        });
      }).catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete client.'
        });
      });
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Layout />
      <div className='clients ml-80'>
        <h1>Users</h1>
        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            placeholder="Search by CIN, Name, Nationality, or City"
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
            className="form-control"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>

        <Link href={route('users.create')} className="btn btn-primary mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 
            0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 
            1 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 
            10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
          </svg>Create New User</Link>

        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>CIN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Date de naissance</th>
                <th>Adresse</th>
                <th>Ville</th>
                <th>Pays</th>
                <th>Nombre Enfants</th>
                <th>État Civil</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.cin}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.nationalite}</td>
                  <td>{user.date_naissance}</td>
                  <td>{user.adresse}</td>
                  <td>{user.ville}</td>
                  <td>{user.pays}</td>
                  <td>{user.nombre_enfants}</td>
                  <td>{user.etat_civil}</td>
                  <td className="actions">
                    <Link href={route('users.edit', user.id)} className="btn btn-primary">
                      <FaEdit />
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => deleteData(user.id, user.cin)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default IndexClient;

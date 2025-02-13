import React, { useEffect, useState } from 'react'
import Search from '../common/Search'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';

const StudentsView = () => {
    const [search, setSearch] = useState("");
    const [students, setStudents] = useState([]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/students/delete/${id}`);
        fetchStudents();
    }

    const fetchStudents = async () => {
        const response = await axios.get("http://localhost:8080/students",
            {
                validateStatus: () => {
                    return true; // always return true, otherwise reject
                }
            }
        );

        if (response.status === 200) {
            setStudents(response.data);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <section>
            <Search search={search} setSearch={setSearch} />

            <table className='table table-bordered table-hover shadow text-center align-middle'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan={3}>Khác</th>
                    </tr>
                </thead>

                <tbody>
                    {students
                        .filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()))
                        .map((st, index) => (
                            <tr key={st.id}>
                                <th scope='row' key={index}>{st.id}</th>
                                <td>{st.firstName}</td>
                                <td>{st.lastName}</td>
                                <td>{st.email}</td>
                                <td>{st.department}</td>
                                <td className="mx-2">
                                    <Link
                                        to={`/student-profile/${st.id}`}
                                        className='btn btn-info d-inline-flex align-items-center justify-content-center'
                                    >
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <Link
                                        to={`/edit-student/${st.id}`}
                                        className='btn btn-warning d-inline-flex align-items-center justify-content-center'
                                    >
                                        <FaEdit />
                                    </Link>
                                </td>
                                <td className='mx-2'>
                                    <button
                                        className='btn btn-danger d-inline-flex align-items-center justify-content-center'
                                        onClick={() => handleDelete(st.id)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    )
}

export default StudentsView

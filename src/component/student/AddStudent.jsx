import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    let navigate = useNavigate();

    const handleSaveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/students", student);
        navigate('/view-students');
    }

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className="mt-5">Thêm sinh viên</h2>
            <form onSubmit={e => handleSaveStudent(e)}>
                <div className='input-group mb-5'>
                    <label htmlFor="lastName" className='input-group-text'>
                        Họ
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={student.lastName}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label htmlFor="firstName" className='input-group-text'>
                        Tên
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={student.firstName}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label htmlFor="email" className='input-group-text'>
                        Email
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={student.email}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label htmlFor="department" className='input-group-text'>
                        Phòng/ban
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type="text"
                        name="department"
                        id="department"
                        required
                        value={student.department}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2 me-md-0 me-sm-4">
                        <button className="btn btn-outline-success">Lưu</button>
                    </div>

                    <div className="col-sm-2">
                        <Link type='submit' className='btn btn-outline-warning'>
                            Hủy
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddStudent

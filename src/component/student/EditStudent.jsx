import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const { id } = useParams();

    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students/student/${id}`);
        if (response.status === 200) {
            setStudent(response.data);
        } else {
            setErrorMessage("Không thể hiển thị thông tin");
        }
      } catch (error) {
        setErrorMessage(error.response.data.error);
      }
    }

    let navigate = useNavigate();

    const handleUpdateStudent = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.put(`http://localhost:8080/students/update/${id}`, student);
           if (response.status === 200) {
                navigate('/view-students');
            } else {
                setErrorMessage("Không thể cập nhật thông tin");
            }
        } catch (error) {
            setErrorMessage(error.response.data.error);
        }
    }

    useEffect(() => {
        fetchStudent();
    }, []);

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className='mt-5'>Thay đổi thông tin sinh viên</h2>
            {errorMessage && (
                <div className="alert alert-danger fade show">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={e => handleUpdateStudent(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>Họ</label>
                    <input
                        type="text"
                        className='form-control col-sm-6'
                        name='lastName'
                        id='lastName'
                        required
                        value={student.lastName}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>Tên</label>
                    <input
                        type="text"
                        className='form-control col-sm-6'
                        name='firstName'
                        id='firstName'
                        required
                        value={student.firstName}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input
                        type="email"
                        className='form-control col-sm-6'
                        name='email'
                        id='email'
                        required
                        value={student.email}
                        // onChange={e => handleInputChange(e)}
                        disabled
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='department'>Phòng/ban</label>
                    <input
                        type="text"
                        className='form-control col-sm-6'
                        name='department'
                        id='department'
                        required
                        value={student.department}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2 me-sm-4 me-md-0">
                        <button
                            type='submit'
                            className='btn btn-outline-success'
                        >
                            Lưu
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <Link
                            to={"/view-students"}
                            type='submit'
                            className='btn btn-outline-warning'
                        >
                            Hủy
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditStudent

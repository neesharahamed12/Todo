import React  from 'react'
import "./signup.css";
import HeadingComp from './HeadingComp';
import axios from "axios";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { authActions } from '../store/auth-slice'; // Update the import path as per your project structure

const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [Inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/signin", Inputs);
      sessionStorage.setItem("id", response.data.user._id);
      dispatch(authActions.login());
      history("/todo");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid Credentials.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className='signup'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column w-100 p-5'>
                <input
                  className='p-2 my-3 input-signup btnn'
                  type='email'
                  name='email'
                  placeholder='Enter your Email'
                  value={Inputs.email}
                  onChange={change}
                />
                <input
                  className='p-2 my-3 input-signup btnn'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={Inputs.password}
                  onChange={change}
                />
                <button className='btn-signup p-2 btnn' onClick={submit}>
                  SignIn
                </button>
              </div>
            </div>

            <div className='col-lg-4 column col-left d-none d-lg-flex justify-content-center align-items-center'>
              <HeadingComp first="Sign" second="In" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;




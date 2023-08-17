import React, { useContext, useState } from 'react';
import './Register.css';
import DarkNavigationBar from '../Shared/Navigation/DarkNavigationBar';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/ContextAuth';

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // use context data
    const { signUp, googleSignIn } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;

        if (password !== confirmPass) {
            setError("Password didn't match!")
            return;
        }

        setError("");
        signUp(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate("/");
            })
            .catch(err => setError(err.code))

    }

    const handleGoogle = () => {
        console.log("hello");
        googleSignIn()
            .then(result => {
                const user = result.user;
                // navigate to the desired route
                navigate("/");
            })
            .catch(err => setError(err))
    }

    return (
        <div>
            <DarkNavigationBar></DarkNavigationBar>

            <div className='sign-in-up-form-container'>
                <div>
                    {/* login form */}
                    <form className='login-form register-form' onSubmit={handleRegister}>
                        <h5>Register</h5>

                        <input type="text" name="fname" placeholder='First Name' /><br />

                        <input type="text" name="lname" placeholder='Last Name' /><br />

                        <input type="email" name="email" placeholder='Username or Email' required /><br />

                        <input type="password" name="password" placeholder='Password' required /><br />

                        <input type="password" name="confirmPassword" placeholder='Confirm Password' required />

                        <p className='mb-0 mt-2 fw-bold text-danger'>{error}</p>


                        <button type="submit" className='sign-in-up-btn'>Create an account</button>

                        <p className='create-account-text'>Already have an account? <Link to="/login">Login</Link></p>
                    </form>

                    {/* external login methods */}
                    <div className='or-divider'>
                        <div className="divider-line"></div>
                        <div className="or-text">or</div>
                        <div className="divider-line"></div>
                    </div>

                    <div className='external-login-methods mb-4'>

                        <div className='external-method'>
                            <div className="external-icon facebook">
                                <FaFacebook></FaFacebook>
                            </div>
                            <div className="external-text">
                                Continue With Facebook
                            </div>
                            <div className=""></div>
                        </div>

                        <div className='external-method' onClick={handleGoogle}>
                            <div className="external-icon">
                                <FcGoogle></FcGoogle>
                            </div>
                            <div className="external-text">
                                Continue With Google
                            </div>
                            <div className=""></div>
                        </div>



                    </div>
                </div>
            </div>


        </div >
    );
};

export default Register;
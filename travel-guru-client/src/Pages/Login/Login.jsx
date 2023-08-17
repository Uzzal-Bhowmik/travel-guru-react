import React, { useContext, useState } from 'react';
import './Login.css';
import DarkNavigationBar from '../Shared/Navigation/DarkNavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/ContextAuth';

const Login = () => {
    const [error, setError] = useState("");

    // use context data
    const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();

                // navigate to the desired route
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.code))

    }

    // google sign in 
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                // navigate to the desired route
                navigate(from, { replace: true })
            })
            .catch(err => setError(err))
    }

    // facebook sign in 
    const handleFacebook = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user;
                // navigate to the desired route
                navigate(from, { replace: true })
            })
            .catch(err => setError(err))
    }


    return (
        <div>
            <DarkNavigationBar></DarkNavigationBar>

            <div className='sign-in-up-form-container'>
                <div>
                    {/* login form */}
                    <form className='login-form' onSubmit={handleLogin}>
                        <h5>Login</h5>

                        <input type="email" name="email" placeholder='Username or Email' required /><br />
                        <input type="password" name="password" placeholder='Password' required />

                        <div className='forgot-pass-container'>

                            <label className="checkbox-container">
                                <input type="checkbox" name="checkbox" />
                                <span className="checkbox-text">Remember Me</span>
                            </label>

                            <a href="#">Forgot Password?</a>
                        </div>

                        {/* error msg */}
                        <p className='mb-0 mt-2 fw-bold text-danger'>{error}</p>

                        <button type="submit" className='sign-in-up-btn'>Login</button>

                        <p className='create-account-text'>Don't have an account? <Link to="/register">Create an account</Link></p>
                    </form>

                    {/* external login methods */}
                    <div className='or-divider'>
                        <div className="divider-line"></div>
                        <div className="or-text">or</div>
                        <div className="divider-line"></div>
                    </div>

                    <div className='external-login-methods mb-4'>

                        <div className='external-method' onClick={handleFacebook}>
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


        </div>
    );
};

export default Login;
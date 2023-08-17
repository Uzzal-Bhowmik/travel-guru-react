import React, { useContext } from 'react';
import './DarkNavigationBar.css';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoDark from "../../../assets/logo-black.png";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/ContextAuth';

const DarkNavigationBar = () => {

    // use context value
    const { user, logOut } = useContext(AuthContext);

    //check if route in hotel or login page
    const hotelsNav = useLocation().pathname.includes("hotels");
    const loginNav = useLocation().pathname.includes("login");

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // sign out successful
            })
            // eslint-disable-next-line no-unused-vars
            .catch(err => {
                // an error happened
            })
    }

    return (
        <Navbar expand="lg" className={`navigation dark-navigation`}>
            <Container className={`${hotelsNav && "bottom-border"}`}>
                <Navbar.Brand>
                    <Link className='text-decoration-none' to="/">
                        <img src={logoDark} alt="logo" className='nav-logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-links"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Destinations
                        </NavLink>

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Blog
                        </NavLink>

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </Nav>

                    {user?.uid ?
                        <>
                            <div >
                                {user?.photoURL ?
                                    <img src={user.photoURL} className='user-thumb' /> :
                                    <div className='letter-user-photo'>
                                        <p title={user?.email}>{user?.email[0]}</p>
                                    </div>
                                }
                            </div>
                            <button className='nav-login-btn ms-2' onClick={handleSignOut}>Sign Out</button>

                        </>
                        :
                        <>{
                            !hotelsNav && <>
                                {loginNav ?
                                    <Link to='/register'>
                                        <button className='nav-login-btn'>Register</button>
                                    </Link> :
                                    <Link to='/login'>
                                        <button className='nav-login-btn'>Login</button>
                                    </Link>
                                }

                            </>
                        }</>


                    }

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default DarkNavigationBar;
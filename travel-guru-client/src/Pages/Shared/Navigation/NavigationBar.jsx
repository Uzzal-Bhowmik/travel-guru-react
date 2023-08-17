import React, { useContext } from 'react';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoWhite from "../../../assets/logo-white.png";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/ContextAuth';

const NavigationBar = () => {
    // use context data
    const { user, logOut } = useContext(AuthContext);

    // sign out handler
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
        <Navbar expand="lg" className="navigation white-navigation">
            <Container>
                <Navbar.Brand>
                    <Link className='text-decoration-none' to="/">
                        <img src={logoWhite} alt="logo" className='nav-logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Form className="d-flex nav-search">
                    <Form.Control
                        type="search"
                        className="me-2"
                        aria-label="Search"
                        placeholder={`Search your destinations...`}
                    />
                </Form>

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

                        </> :
                        <Link to='/login'>
                            <button className='nav-button'>Login</button>
                        </Link>
                    }




                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
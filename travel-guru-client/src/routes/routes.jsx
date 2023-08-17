import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Hotels from '../Pages/Hotels/Hotels';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DynamicBooking from '../Pages/DynamicBooking/DynamicBooking';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                loader: async () => fetch("http://localhost:5000/destinations"),
                element: <Home />
            },
            {
                path: "/booking/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/destinations/${params.id}`),
                element: <DynamicBooking></DynamicBooking>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/hotels/:id",
                loader: async () => fetch("http://localhost:5000/hotels"),
                element: <PrivateRoute><Hotels /></PrivateRoute>
            }
        ]
    }
])


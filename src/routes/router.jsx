import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import CategoryNews from '../assets/CategoryNews';
import AuthLayout from '../components/AuthLayout';
import Login from '../components/Login';
import Registration from '../components/Registration';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/category/:id',
                element: <CategoryNews/>,
                loader: ({params}) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'auth/login',
                element: <Login/>
            },
            {
                path: 'auth/registration',
                element: <Registration/>
            }
        ]
    },
    
])
export default router;
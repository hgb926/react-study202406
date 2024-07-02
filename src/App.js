import React from 'react';
import Home from './components/RouteExample/pages/home';
import Products from './components/RouteExample/pages/Products';
import RootLayout from './components/RouteExample/layout/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
                          //  RouterProvider는 컴포넌트.

const router = createBrowserRouter([

    // 중첩 라우터
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
        ]
    },
    // children이 outlet     
]);

const App = () => {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
import React from 'react';
import Home from './components/RouteExample/pages/home';
import Products from './components/RouteExample/pages/Products';
import ProductDetail from './components/RouteExample/pages/ProductDetail';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
                          //  RouterProvider는 컴포넌트.

const router = createBrowserRouter([

    // 중첩 라우터
    {
        path: '/base',
        element: <RootLayout />,
        errorElement: <ErrorPage />, // 에러가 났을 때 보여줄 페이지
        // children이 outlet
        children: [
            { index: true, element: <Home /> }, // 상대경로.
            { path: 'products', element: <Products /> }, // ./가 알아서 붙는다
            { path: 'products/:prodId/page/:pageNo', element: <ProductDetail />}
        ]
    },

]);

const App = () => {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
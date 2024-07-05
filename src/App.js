import React from 'react';
import Home from './components/RouteExample/pages/Home';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events, { loader as eventListLoader } from './components/RouteExample/pages/Events';
import EventDetail, { loader as eventDetailLoader} from './components/RouteExample/pages/EventDetail';
import EventLayout from './components/RouteExample/layout/EventLayout';
import NewEvent, { action as saveAction } from './components/RouteExample/pages/NewEvent';
import EditPage from './components/RouteExample/pages/EditPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 라우터 설정
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'events',
                element: <EventLayout />,
                children: [
                    {
                        index: true,
                        element: <Events />,
                        // 이 페이지가 열릴때 자동으로 트리거되어 호출되는 함수
                        // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있습니다.
                        // loader: eventListLoader, // 무한스크롤을 위해 주석처리
                    },
                    { path: ':eventId',
                      loader: eventDetailLoader,
                        // loader가 children에게 직접적으로 연결되지 않아
                        // EventDetail에서 loader를 사용하지 못하고 있음.
                        id: 'event-detail', // loader에게 ID 부여
                      children: [
                         { 
                             index: true, 
                             element: <EventDetail />,
                             // action: deleteAction,
                         },
                         {
                             path: 'edit',
                             element: <EditPage />,
                             action: saveAction
                         },
                      ]
                    },
                    { path: 'new',
                      element: <NewEvent />,
                      // 서버에 갱신데이터요청을 보낼 때 트리거
                      // post, put, patch
                      action: saveAction
                    },
                ]
            },
        ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;

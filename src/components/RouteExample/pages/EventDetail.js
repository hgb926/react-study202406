import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom'

const EventDetail = () => {

    const { eventId: id } = useParams();

    // const data = useLoaderData();
    // console.log('loader data: ', data) // undefined
    
    // loader를 사용한 컴포넌트의 형제나 부모는 데이터를 받아올 수 없다.

    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event ID: {id}</p>
        </>
    );
};

export default EventDetail;
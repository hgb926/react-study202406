import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData, useRouteLoaderData, redirect } from 'react-router-dom'
import EventItem from '../components/EventItem';

const EventDetail = () => {

    // 사용범위가 본인컴포넌트와 그 하위 컴포넌트 (children은 하위가 아니다.)
    // const ev = useLoaderData(); // 자신의 loader를 불러오는 훅
    const ev = useRouteLoaderData('event-detail'); // 부모의 loader를 불러오는 훅(지정한 id)
    
    return <EventItem event={ev} />
};

export default EventDetail;

export const loader = async ({ params }) => {

    const { eventId: id } = params;

    const response = await fetch(`http://localhost:8282/events/${id}`);
    return await response.json();

}

// action함수 만들고 App.js에 바인딩 후,
// action을 트리거 하는 방법
// 실제로 버튼이 있는 곳(EventItem.js)로 이동

// delete fetch action함수로 만드는 법
// export const action = async () => {
//
//     const { eventId: id } = params;
//    
//     if (!window.confirm('Are you sure?')) return
//     await fetch(`http://localhost:8282/events/${id}`, {
//         method: 'DELETE',
//     });
//     if (!response.ok) {
//         // ...
//     }
//     return redirect('/events')
// }
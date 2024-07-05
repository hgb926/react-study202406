import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';
import EventSkeleton from '../components/EventSkeleton';

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();
    // console.log(eventList)

    // 서버에서 가져온 이벤트 목록
    const [events, setEvents] = useState([]);

    // 로딩 상태 체크
    const [loading, setLoading] = useState(false);

    // 서버로 목록 조회 요청보내기
    const loadEvents = async () => {

        
        setLoading(true);
        const response = await fetch('http://localhost:8282/events/page/1?sort=date');
        const events = await response.json();

        setEvents(events);
        setLoading(false)
    };

    // 초기 이벤트 1페이지 목록 가져오기
    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <>
            {/*<h1>Events Page</h1>*/}
            <EventList eventList={events} />
            {loading && <EventSkeleton/>}
        </>
    );
};

export default Events;

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {
//
//     const response = await fetch(`http://localhost:8282/events/page/1?sort=date`);
//
//     if (response.status !== 200) {
//         const errorText = await response.text();
//       throw new json(
//           { message: errorText },
//         {
//             status: response.status,
//         }
//       ); // ErrorPage로 연결.
//     }
//
//     return response;
// }

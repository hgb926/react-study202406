import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData, useRouteLoaderData } from 'react-router-dom'
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

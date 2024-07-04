import React from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();
    console.log(eventList)

    return (
        <>
            <h1>Events Page</h1>
             <EventList eventList={eventList} />
        </>
    );
};

export default Events;

// loader를 app.js로부터 아웃소싱
export const loader = async () => {

    const response = await fetch('http://localhost:8282/events?sort=date');

    if (response.status !== 200) {
        const errorText = await response.text();
      throw new json(
          { message: errorText },
        {
            status: response.status,
        }
      ); // ErrorPage로 연결.
    }

    return response;
}

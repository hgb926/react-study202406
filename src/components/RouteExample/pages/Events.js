import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const Events = () => {

    const [eventList, setEventList] = useState([]);

    // 무한루프를 막기위해 최초1번만 실행되도록 useEffect 사용
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:8282/events');
            const jsonData = await response.json();
            setEventList(jsonData)
        };
        fetchEvents();
    }, []);


    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {eventList.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Events
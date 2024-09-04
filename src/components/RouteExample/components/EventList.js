import React from 'react';
import styles from './EventList.module.scss'
import { Link, useLoaderData } from 'react-router-dom';

const EventList = ({ eventList }) => {
    
    const { events, list, item, content } = styles;

    // loader데이터는 loader를 선언한 페이지 밑에있는 하위컴포넌트 어디서든 사용가능
    // const data = useLoaderData();
    
    
    return (
        <div className={events}>
            <h1>All Events</h1>
            <ul className={list}>
                {
                    eventList.map(ev => (
                        <li key={ev.id} className={item}>
                            <Link to={ev.id}>
                                <img src={ev.img_url} alt={ev.title} />
                                <div className={content}>
                                    <h2>{ev.title}</h2>
                                    <time>{ev.startDate}</time>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default EventList;
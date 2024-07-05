import React from "react";
import styles from './EventItem.module.scss';
import { Link, useNavigate, useParams, useSubmit } from 'react-router-dom'

const EventItem = ({ event }) => {

    // action함수를 트리거하는 2번째 방법
    // const submit = useSubmit();

    const { eventId: id } = useParams();
    const navigate = useNavigate();

    const deleteHandler = () => {

        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        (async () => {
            const response = await fetch(`http://localhost:8282/events/${id}`, {
                method: "DELETE",
            })
            navigate(`..`);
        })();
    }
    
    const {
        // 'event-id': id, // 여기서도 id를 받아올 수 있다.
        title, 
        desc: description,
        'img-url': image,
        'start-date': date
    } = event;

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={deleteHandler}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;

import React from 'react';
import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';
// portal을 사용하기 위한 불러오기
import ReactDOM from 'react-dom';
import Portal from '../Portal/Portal'


const BackDrop = ({onClose}) => {
    return (
        <div className={styles.backdrop} onClick={onClose}/>
    );
};

const ModalOveray = ({title, message, onClose}) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onClose}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = ({title, message, onClose}) => {
    return (
        <>
            <Portal destId={'backdrop-root'}>
                <BackDrop onClose={onClose}/>
            </Portal>
            <Portal destId={'overay-root'}>
                <ModalOveray
                    onClose={onClose}
                    title={title}
                    message={message}
                />
            </Portal>
        </>
    );
};

export default ErrorModal;

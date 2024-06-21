import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label }) => {
    return (
        <div className={styles.form}>
            <label>{label}</label>
            <input />
        </div>
    );
};

export default Input;
import React from 'react';
// import './Button.css';
import styled from 'styled-components'

const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    
    &:focus { // &는 상속된 부모를 일컫는다, 여기서는 button을 가르킴
        outline: none; 
    }

    &:hover,
    &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }

`;


// const Button = ({ type, onClick, children}) => {
//     return (
//         <button type={type} className="button" onClick={onClick}>
//             {children}
//         </button>
//     );
// };

export default Button;

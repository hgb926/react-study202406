import React, { useContext, useState, useEffect } from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {


    // bump 애니메이션을 제어하는 상태변수
    const [isBump, setIsBump] = useState(false);

    // 장바구니 배열 가져오기
    const { cartItems } = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => {
        return accum + current.amount;
    }, 0);

    // 주문 총 수량
    console.log(numberOfCart)

    const {button, icon, badge, bump} = styles;

    useEffect(() => {
        // console.log("useEffect 실행")
        if (cartItems.length === 0) return;

        setIsBump(true); // 장바구니의 상태가 바뀔때마다 실행될 애니메이션

        // 애니메이션 실행 후 클래스 제거 (이래야 클래스가 사라지고 반복이 된다.)
        const timer = setTimeout(() => {
            setIsBump(false);
        }, 300)

        // 최적화를 위한 clearTimeout
        return () => clearTimeout(timer);


    }, [cartItems]); // 의존성 배열

    return (
        <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
            <span>My Cart</span>
            <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;

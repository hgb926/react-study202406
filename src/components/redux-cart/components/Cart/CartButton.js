import React from "react";
import styles from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'

const CartButton = () => {

    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    console.log(totalQuantity)

    // 스토어에 정의된 함수를 사용할땐 꼭 dispatch를 통해서.
    const toggleCartHandler = e => {
        dispatch(uiActions.toggle());
    }

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

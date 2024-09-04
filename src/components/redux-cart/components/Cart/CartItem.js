import React from "react";
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux'
import { cartActions } from "../../store/cart-slice"

const CartItem = ({item}) => {

  const { title, quantity, total, price, id } = item;

  const dispatch = useDispatch();

    const increaseHandler = e => {
        dispatch(cartActions.addCartItem({
            id: id,
            title: title,
            quantity: 1,
            total: price,
            price: price,
        }));
    }

    const decreaseHandler = e => {
        dispatch(cartActions.decreaseCartItem(id))
    };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          {total}{' '}
          <span className={styles.itemprice}>({price}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

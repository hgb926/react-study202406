import React from 'react';
import Header from './components/Food/Layout/Header'
import Meals from './components/Food/Meals/Meals'
import Cart from './components/Food/Cart/Cart'

import CartProvider from './store/CartProvider'

const App = () => {

    return (
        <CartProvider>
        {/*  밑에가 children이 된다.  */}
            <Cart />
            <Header />
            <div id="main">
                <Meals />
            </div>
        {/*    */}
        </CartProvider>
    )
};

export default App;
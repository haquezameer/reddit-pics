import React from 'react';


const Cart = ({style,children,handleClick}) => (
    <div style={style} onClick={handleClick}>
        {children}
    </div>
);

export default Cart;
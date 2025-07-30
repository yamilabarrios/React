import React from 'react';

const CartWidget = () => {
  return React.createElement(
    'div',
    { style: { display: 'flex', alignItems: 'center' } },
    React.createElement('span', { role: 'img', 'aria-label': 'carrito', style: { fontSize: '30px' } }, '🛒'),
    React.createElement('span', { style: { marginLeft: '8px' } }, '0')
  );
};

export default CartWidget;
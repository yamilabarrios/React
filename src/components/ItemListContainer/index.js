import React from 'react';

const ItemListContainer = (props) => {
  return React.createElement(
    'div',
    { style: { padding: '30px', textAlign: 'center', fontFamily: "fantasy"  } },
    React.createElement('h2', null,  props.mensaje)
  );
};

export default ItemListContainer;
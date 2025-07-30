import React from 'react';
import CartWidget from "../CartWidget";

const NavBar = () => {
    return React.createElement(
        'nav',
        { style: { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center', backgroundColor: 'rgba(245, 179, 215, 1)', color: 'black', fontFamily: "fantasy"  } },
        React.createElement('div', { style: { fontWeight: "bolder", fontSize: '24px' } }, 'La Pelu de Mary'),
        React.createElement(
            'ul',
            { style: { listStyle: 'none', display: 'flex', gap: '20px', margin: 0 } },
            React.createElement('li', null, React.createElement('a', { href: "", style: { color: "black", textDecoration: 'none' } }, "Inicio")),
            React.createElement('li', null, React.createElement('a', { href: "", style: { color: "black", textDecoration: 'none' } }, "Servicios")),
            React.createElement('li', null, React.createElement('a', { href: "", style: { color: "black", textDecoration: 'none' } }, "Contacto"))
        ),
        React.createElement(CartWidget, null)
    );
};

export default NavBar;


import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
 

const App = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(NavBar, null),
    React.createElement(ItemListContainer, { mensaje: "Bienvenida a Pelu de Mary, aquí vas a encontrar el estilo que te define" })
  );
};

export default App;
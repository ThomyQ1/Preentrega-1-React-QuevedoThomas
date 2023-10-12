import React from 'react';

const ItemListContainer = () => {
  const showGreetingPrompt = () => {
    prompt('Aca estan los productos', 'Aca estan los productos');
  };

  return (
    <div>
      <h2>Aca Estan Todas nuestras bebidas en venta</h2>
      <button onClick={showGreetingPrompt}>Mostrar Mensaje</button>
    </div>
  );
}

export default ItemListContainer;

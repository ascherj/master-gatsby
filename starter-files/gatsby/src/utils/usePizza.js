import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  const [order, setOrder] = useState([]);

  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  // TODO: Send data to a serverless function upon checkout

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}

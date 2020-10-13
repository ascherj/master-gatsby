import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // below line not necessary due to moving state up to provider
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);

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

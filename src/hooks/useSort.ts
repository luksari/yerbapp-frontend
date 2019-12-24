import { useState } from 'react';

export const useSort = () => {
  const [order, setOrder] = useState('DESC');
  const [orderBy, setOrderBy] = useState('id');

  const handleSort = (_orderBy: string, _order: string) => {
    setOrder(_order.toUpperCase());
    setOrderBy(_orderBy);
  };

  return { order, orderBy, handleSort };
};

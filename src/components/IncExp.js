import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export function IncExp() {
  const transactions = useContext(GlobalContext)
  const amounts = transactions.map(transactions => transactions.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Ganhos</h4>
        <p className='money plus'>+$0.00</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className='money minus'>-$0.00</p>
      </div>

    </div>
  );
}
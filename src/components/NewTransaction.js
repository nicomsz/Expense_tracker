import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';



export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const addTransaction = useContext(GlobalContext)
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000)
        ,text
        ,amount
      }
      addTransaction(newTransaction)
    }

  return (
   <div>
    <h3> Adicionar nova transação </h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>

        
        <p>Descrição</p>
        <input type='text' placeholder='Insira a descrição aqui...' value={text}  onChange={(e) => setText(e.target.value)}/>
        <label htmlFor='amount'>

             Quantidade <br />

            (negativo - despesa, positivo, ganho)

        </label>
        <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="Insira a quantidade aqui..." />
        </div>
        <button className='btn'>Adicionar transação</button>
    </form>


   </div>
  );
}
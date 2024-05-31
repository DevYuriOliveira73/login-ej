import React, { useState } from 'react';
import produtoList from './data'; 

const AddProduto = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [fabricante, setFabricante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      nome,
      valor,
      quantidade,
      lote,
      fabricante
    };
    
    produtoList.push(novoProduto); 
    console.log('Produto adicionado:', novoProduto);

    setNome('');
    setValor('');
    setQuantidade('');
    setLote('');
    setFabricante('');
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Valor:</label>
          <input 
            type="text" 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input 
            type="text" 
            value={quantidade} 
            onChange={(e) => setQuantidade(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Lote:</label>
          <input 
            type="text" 
            value={lote} 
            onChange={(e) => setLote(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Fabricante:</label>
          <input 
            type="text" 
            value={fabricante} 
            onChange={(e) => setFabricante(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddProduto;

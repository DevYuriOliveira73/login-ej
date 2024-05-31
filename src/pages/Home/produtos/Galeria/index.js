import { useState } from 'react';
import { produtoList } from '../data';

export default function Galeria() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  
  let produto = produtoList[index];
  return (
    
    <div>
        <h2>Lista de Produtos</h2>
        
            <h3>{produto.nome}</h3>
            <p>Valor: {produto.valor}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <p>Lote: {produto.lote}</p>
            <p>Fabricante: {produto.fabricante}</p>

            <button onClick={handleNextClick}>
                Next
            </button>
        
    </div>
    
  );
}


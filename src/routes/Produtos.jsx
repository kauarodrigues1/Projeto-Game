import React from 'react'

//props - vai pegar dados de cada propriedade em outro local
const Produtos = ({imagem,titulo,descricao,preco}) => {
  return (
    <article className="produto">  
        <img src={imagem} alt={titulo}/>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <p className="preco">{preco}</p>
        <button>Comprar</button>
    </article>
  )
}

export default Produtos

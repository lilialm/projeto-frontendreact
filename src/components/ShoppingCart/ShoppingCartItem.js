import React from "react";
import styled from "styled-components";
import { deletar } from "../../imagens/highlight_off_black_24dp.svg";

const Carrinho = styled.div`
  padding: 10px;
  p {
    margin: 2px;
  }
  text-align: center;
`;
const botao = styled.button`
  border: none;
  background-color: #64f7ce;
`;

class ShoppingCartItem extends React.Component {
  state = {
    conta: 0,
    carrinho: [],
  };

  renderizarCarrinho = () => {
    let resposta = this.props.produtosCarrinho ? (
      this.props.produtosCarrinho.map((produto) => {
        return (
          <div>
            <span>{`${produto.quantidade}  x `}</span>
            <span> {`${produto.produto.name}`}</span>
            <span> {`$ ${produto.produto.price}  `}</span>
            <button
              onClick={() => this.props.deletarProdutos(produto.produto.id)}
            >
              x
            </button>
          </div>
        );
      })
    ) : (
      <p>"No products in the cart" </p>
    );

    return resposta;
  };

  render() {
    console.log(this.props.produtosCarrinho);
    return (
      <Carrinho>
        {this.renderizarCarrinho()}
        <h3>Total: $ {this.props.valorTotal} </h3>
      </Carrinho>
    );
  }
}

export default ShoppingCartItem;

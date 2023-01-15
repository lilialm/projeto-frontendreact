import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
const Carrinho = styled.div`
  background-color: black;
  color: white;
  height: 500px;
  margin-top: 26%;
  text-align: center;
  h3 {
    margin: 12px;
  }
`;

class ShoppingCart extends React.Component {
  state = {
    carrinho: [],
  };

  render() {
    console.log(this.props.valorTotal);
    return (
      <Carrinho>
        <h2>Cart:</h2>
        <ShoppingCartItem
          produtosCarrinho={this.props.carrinho}
          deletarProdutos={this.props.deletarProdutos}
          valorTotal={this.props.valorTotal}
        />
      </Carrinho>
    );
  }
}

export default ShoppingCart;

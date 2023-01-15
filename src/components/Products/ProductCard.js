import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  img {
    border-radius: 9px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
    display: flex;
    align-self: center;
  }
  button {
    background-color: #3ebce8;
    border: none;
    border-radius: 10px;
    height: 22px;
  }
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img
          src={product.photo}
          alt="imagem do produto"
          width="200px"
          style={{ alignSelf: "center" }}
        />
        <CardInfo>
          <h2 style={{ alignSelf: "center" }}>{product.name}</h2>
          <h4 style={{ alignSelf: "center" }}>$ {product.price},00</h4>
          <button value={product.id} onClick={this.props.adicionarProduto}>
            Add to Cart
          </button>
        </CardInfo>
      </CardContainer>
    );
  }
}

import React from "react";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const ProductsContainer = styled.div``;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: flex-end;
  p {
    margin-right: 49%;
  }
  span {
    margin-right: 2%;
  }
  select {
    border: none;
    background-color: #3ebce8;
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;

export class Products extends React.Component {
  state = {};

  getFilteredAndOrderedList = () => {
    let product = this.props.products
      .filter((job) => {
        return job.name.toLowerCase().includes(this.props.query);
      })
      .filter((job) => {
        return this.props.minPrice === "" || job.price >= this.props.minPrice;
      })
      .filter((job) => {
        return this.props.maxPrice === "" || job.price <= this.props.maxPrice;
      })
      .sort((currentJob, nextJob) => {
        switch (this.props.sortingParameter) {
          default:
            return this.props.order * (currentJob.price - nextJob.price);
        }
      })
      .map((product) => {
        return (
          <ProductCard
            product={product}
            adicionarProduto={this.props.adicionarProduto}
          />
        );
      });

    return product;
  };

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList();

    return (
      <ProductsContainer>
        <ProductsHeader>
          <p>
            <strong>Trips available: {filteredAndOrderedList.length}</strong>
          </p>
          <span>
            <label for="sort">
              <strong>Order: </strong>
            </label>
          </span>

          <select
            name="sort"
            value={this.props.order}
            onChange={this.props.updateOrder}
          >
            <option value={1}>Ascending</option>
            <option value={-1}>Descending</option>
          </select>
        </ProductsHeader>
        <ProductsGrid>{filteredAndOrderedList}</ProductsGrid>
      </ProductsContainer>
    );
  }
}

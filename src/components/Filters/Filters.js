import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  background-color: black;
  color: white;
  height: 500px;
  margin-top: 26%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus:-moz-placeholder {
    /* Firefox 18- */
    color: transparent;
  }
  input:focus::-moz-placeholder {
    /* Firefox 19+ */
    color: transparent;
  }
  input:focus:-ms-input-placeholder {
    color: transparent;
  }
  input {
    background-color: white;
    border: none;
    height: 17px;
    width: 200px;
    align-self: center;
  }
  label {
    margin-top: 8px;
  }
`;
export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h2>Filters</h2>
        <label for="pesquisar">Search by name:</label>
        <input
          name="pesquisar"
          placeholder="Search"
          value={this.props.query}
          onChange={this.props.updateQuery}
        />
        <label for="pesquisar">Min Value:</label>
        <input
          placeholder="Minimum"
          type="number"
          value={this.props.minPrice}
          onChange={this.props.updateMinPrice}
        />
        <label for="pesquisar">Max Value:</label>
        <input
          placeholder="Maximum"
          type="number"
          value={this.props.maxPrice}
          onChange={this.props.updateMaxPrice}
        />
        <img
          src="https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/62-/K8yU0CD5OWIwhZ9wOLGcmkBfuv1IWE_original.jpg"
          width="250px"
          style={{
            alignSelf: "center",
            bottom: "40px",
            display: "flex",
            margin: "20px",
          }}
        />
      </FiltersContainer>
    );
  }
}

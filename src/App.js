import React from "react";
import { Products } from "./components/Products/Products";
import styled from "styled-components";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/ContainerHeader";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: white;
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const products = [
  {
    id: 1,
    name: "Trip to Mars",
    price: 500000,
    photo: "https://www.pngall.com/wp-content/uploads/13/Mars-PNG-Picture.png",
  },
  {
    id: 2,
    name: "Trip to Moon",
    price: 400000,
    photo:
      "https://www.freeiconspng.com/thumbs/moon-png/moon-png-no-background-15.png",
  },
  {
    id: 3,
    name: "Trip to Jupiter",
    price: 600000,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  },
  {
    id: 4,
    name: "Trip to Mercury",
    price: 300000,
    photo:
      "https://cdn.mos.cms.futurecdn.net/KqzWwkCMPeZHFra2hkiJWj-320-80.jpg",
  },
  {
    id: 5,
    name: "Trip to Pluto",
    price: 950000,
    photo:
      "https://cdn.britannica.com/85/183485-050-C93475CB/Pluto-spacecraft-New-Horizons-July-13-2015.jpg",
  },

  {
    id: 6,
    name: "Trip to Uranus",
    price: 800000,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
  },
  {
    id: 7,
    name: "Trip to Saturn",
    price: 700000,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Saturn_during_Equinox_%28rot45%29.jpg/800px-Saturn_during_Equinox_%28rot45%29.jpg",
  },
  {
    id: 8,
    name: "Trip to Neptune",
    price: 900000,
    photo:
      "http://www.nasa.gov/sites/default/files/thumbnails/image/neptune_voyager1.jpg",
  },
  {
    id: 9,
    name: "Trip to Venus",
    price: 250000,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/800px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
  },
];

class App extends React.Component {
  state = {
    carrinho: [],
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1,
  };
  adicionarProduto = (event) => {
    event.preventDefault();
    let produtoSelecionado = products.filter((products) => {
      return products.id == event.target.value;
    });
    let controle = 0;
    let carrinho1 = this.state.carrinho.map((itemCarrinho) => {
      if (itemCarrinho.produto.id == event.target.value) {
        itemCarrinho.quantidade++;
        itemCarrinho.valorTotal += itemCarrinho.produto.price;
        controle++;
      }
      return itemCarrinho;
    });

    if (controle == 0) {
      this.setState({
        carrinho: [
          ...this.state.carrinho,
          {
            quantidade: 1,
            produto: produtoSelecionado[0],
            valorTotal: !this.state.carrinho.valorTotal
              ? produtoSelecionado[0].price
              : this.state.carrinho.valorTotal + produtoSelecionado[0].price,
          },
        ],
      });
    } else {
      this.setState({
        carrinho: carrinho1,
      });
    }
  };

  removerCarrinho = (produtoId) => {
    let remove = this.state.carrinho.filter((produto) => {
      return produtoId === produto.produto.id;
    });

    if (remove[0].quantidade > 1) {
      let mapeandoProdutos = this.state.carrinho.map((produtos) => {
        if (produtos.produto.id === produtoId) {
          produtos.quantidade--;
          produtos.valorTotal = produtos.valorTotal - produtos.produto.price;
        }
        return produtos;
      });

      console.log(mapeandoProdutos);
      this.setState({ carrinho: mapeandoProdutos });
    } else {
      remove = this.state.carrinho.filter((produto) => {
        return produtoId !== produto.produto.id;
      });
      this.setState({ carrinho: remove });
    }
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas");
    const tarefasParse = JSON.parse(tarefasString);

    this.setState({ carrinho: tarefasParse || [] });
  }
  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value,
    });
  };

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value,
    });
  };

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value,
    });
  };

  updateSortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value,
    });
  };

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {
    let soma = 0;
    let valorTotal = this.state.carrinho.map((valor) => {
      soma = valor.valorTotal + soma;
      return soma;
    });

    let carrinho = this.state.carrinho;
    return (
      <>
        <Header />

        <AppContainer>
          <Filters
            query={this.state.query}
            updateQuery={this.updateQuery}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
          />

          <Products
            products={products}
            adicionarProduto={this.adicionarProduto}
            query={this.state.query.toLowerCase()}
            updateQuery={this.updateQuery}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            updateSortingParameter={this.updateSortingParameter}
            updateOrder={this.updateOrder}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            sortingParameter={this.state.sortingParameter}
            order={this.state.order}
          />

          <ShoppingCart
            carrinho={carrinho}
            deletarProdutos={this.removerCarrinho}
            valorTotal={soma}
          />
        </AppContainer>
      </>
    );
  }
}

export default App;

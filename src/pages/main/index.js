import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';

import { GET_PRODUCTS } from '../../services/queries/product';

import { Container } from './styles';
import Header from '../../components/Header';

export default class Main extends Component {
  state = {
    // products: [],
    // productInfo: {},
    // page: 1,
  };

  // prevPage = () => {
  //   const { page } = this.state;
  //   if (page === 1) return;

  //   const pageNumber = page - 1;
  //   this.loadProducts(pageNumber);
  // };

  // nextPage = () => {
  //   const { page, productInfo } = this.state;
  //   if (page === productInfo.pages) return;

  //   const pageNumber = page + 1;
  //   this.loadProducts(pageNumber);
  // };

  render() {
    // const { page, productInfo } = this.state;
    return (
      <>
        <Header />
        <Container>
          <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
              if (loading) return <p>Carregando...</p>;

              if (error) return <p>Error!</p>;

              return (
                <>
                  {data.products.docs.map(product => (
                    <article key={product.id}>
                      <strong>{product.name}</strong>
                      <p>{product.description}</p>
                      <Link to={`/products/${product.id}`}>Acessar</Link>
                    </article>
                  ))}
                </>
              );
            }}
          </Query>
        </Container>
      </>
    );
  }
}

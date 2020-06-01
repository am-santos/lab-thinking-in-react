import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [...this.props.products.data],
      renderProducts: [...this.props.products.data],
      searchInput: '',
      displayStock: true
    };
  }

  search = (searchChars, checked) => {
    console.log('this.state.allProducts:', this.state.allProducts);
    const products = [...this.state.allProducts];
    const searchingChars = searchChars.toLowerCase();
    let renderList = [];
    if (checked && searchChars) {
      // filter when checked and string exist
      renderList = products.filter(product => {
        return (
          product.name.toLowerCase().includes(searchingChars) && product.stocked
        );
      });
    } else if (checked && !searchChars) {
      // filter when only checked var exists
      renderList = products.filter(product => {
        return product.name.toLowerCase().includes(searchingChars);
        // return product.name.toLowerCase().split(searchingChars).length > 1;
      });
    } else {
      // filter when only search var exists
    }

    this.setState({
      renderProducts: renderList,
      searchInput: searchChars,
      displayStock: checked
    });
  };

  render() {
    const filteredProducts = [...this.state.renderProducts];
    return (
      <section>
        <div></div>
        <SearchBar
          searchMethod={this.search}
          searchInput={this.searchInput}
          displayStock={this.displayStock}
        />
        <ProductTable filteredProducts={filteredProducts} />
      </section>
    );
  }
}

export default FilterableProductTable;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/mainconten/Home';
import ProductDetail from './Component/Product/ProductDetail';
import Header from './Component/Hearder/Header';
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [] 
    };
  }
  
  handleSearch = (searchResults) => {
    this.setState({ searchResults });
  };

  render() {
    return (
      <Router>
        <div>
          <Header onSearch={this.handleSearch} />
          <Routes> 
            <Route exact path="/" element={<Home searchResults={this.state.searchResults} />} />
            <Route path="/chi-tiet" element={<ProductDetail />} /> 
          </Routes> 
        </div>
      </Router>
    );
  }
}

export default App;

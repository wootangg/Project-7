import React, { Component } from 'react';

import apiKey from './config';
import Gallery from './Gallery';
import Header from './Header';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      images: [],
      loading: true
    }
  }

  // initial api request load
  componentDidMount() {
    this.searchImage();
  }

  //search component
  searchImage = (query = 'animals') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        images : responseData.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log(`Error fetching` , error)
    });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Header onSearch={this.searchImage} />
          
          <Route exact path="/" render={() => <Gallery data={this.state.images} loading={this.state.loading} />} />
          <Route path="/cats" render={() => <Gallery data={this.state.images} loading={this.state.loading} />} />
            
          
            

        </div>
      </BrowserRouter>
    );
  }

}

export default App;

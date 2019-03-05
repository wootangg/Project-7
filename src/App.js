import React, { Component } from 'react';

import Header from './Header';
import apiKey from './config';
import Gallery from './Gallery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        images : responseData.photos.photo
      });
    })
    .catch(error => {
      console.log(`Error fetching` , error)
    });

  }

  searchImage = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        images : responseData.photos.photo
      });
    })
    .catch(error => {
      console.log(`Error fetching` , error)
    });

  }

  render() {
    return (
      <div className="container">
        <Header onSearch={this.searchImage} />
        <div className="photo-container">
          <h2>Results</h2>
          <Gallery data={this.state.images} />
        </div>
      </div>
    );
  }

}

export default App;

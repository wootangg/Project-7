import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Nav from './components/Nav';
import NoSearch from './components/NoSearch';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      img: [],
      clouds: [],
      mountains: [],
      flowers: [],
      loading: true,
      title: ""
    }
  }

  // initial api request load
  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=$clouds&per_page=28&format=json&nojsoncallback=1`)
      .then((response) => {
        // handle success
        this.setState({
          clouds : response.data.photos.photo,
          loading: false
        })
      })
      .catch((error) => {
        // handle error
        console.log(`Error fetching` , error)
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=$mountains&per_page=28&format=json&nojsoncallback=1`)
      .then((response) => {
        // handle success
        this.setState({
          mountains : response.data.photos.photo,
          loading: false
        })
      })
      .catch((error) => {
        // handle error
        console.log(`Error fetching` , error)
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=$flowers&per_page=28&format=json&nojsoncallback=1`)
      .then((response) => {
        // handle success
        this.setState({
          flowers : response.data.photos.photo,
          loading: false
        })
      })
      .catch((error) => {
        // handle error
        console.log(`Error fetching` , error)
    });

  };
  
  searchDefault = (query = 'clouds') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=28&format=json&nojsoncallback=1`)
      .then((response) => {
        // handle success
        this.setState({
          img : response.data.photos.photo,
          loading: false,
          title: query
        })
      })
      .catch((error) => {
        // handle error
        console.log(`Error fetching` , error)
      });
  }

  
    
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
          <Header onSearch={this.searchDefault} />
          <Nav  />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/clouds" /> } />
            <Route path="/clouds" render={() => <Gallery data={this.state.clouds} loading={this.state.loading} title={'clouds'} /> } />
            <Route path="/mountains" render={() => <Gallery data={this.state.mountains} loading={this.state.loading} title={'mountains'} /> } />
            <Route path="/flowers" render={() => <Gallery data={this.state.flowers} loading={this.state.loading} title={'flower'} /> } />
            <Route path="/search" render={() => <Gallery data={this.state.img} loading={this.state.loading} title={this.state.title} />} />
            <Route component={NoSearch} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

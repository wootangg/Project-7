import React, {Component} from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import apiKey from '../config';

class Dogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: true,
            title: "Dogs Results"
        }
    }

    componentDidMount() {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=28&format=json&nojsoncallback=1`)
            .then((response) => {
                // handle success
                this.setState({
                images : response.data.photos.photo,
                loading: false
                })
            })
            .catch((error) => {
                // handle error
                console.log(`Error fetching` , error)
        });
    }

    render() {
        return(
            <Gallery data={this.state.images} loading={this.state.loading} title={this.state.title} />
        )
    }
}

export default Dogs;
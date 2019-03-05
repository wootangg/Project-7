import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
    const results = props.data;
    
    let images = results.map( (el) => {
        let farm = el['farm'];
        let server = el['server'];
        let id = el['id'];
        let secret = el['secret'];

        const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        
        return <GalleryItem url={url} key={id} />
    });


    return (
        <ul>
            {images}
        </ul>
    )
    
    
}

export default Gallery;
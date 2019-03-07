import React from 'react';
import GalleryItem from './GalleryItem';
import NoSearch from './NoSearch';

const Gallery = (props) => {
    const results = props.data;
    let images;
    

    //load images if api was successful
    if(results.length > 0) {
        images = results.map( (el) => {
            let farm = el['farm'];
            let server = el['server'];
            let id = el['id'];
            let secret = el['secret'];

            const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
            
            return <GalleryItem url={url} key={id} />
        });
    } else {
        images = <NoSearch />
    }
    


    
    return (
        <div className="photo-container">
            <h2>{props.title} Results</h2>
            {
                (props.loading) ? 
                <p>Loading...</p> : 
                <ul>
                    {images}
                </ul>
            }
        </div>
    )
    
    
}

export default Gallery;
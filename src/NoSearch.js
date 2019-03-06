import React from 'react';

const NoSearch = (props) => {
    return (
        <li className="not-found ">
            <h3>Sorry, no images were found.</h3>
            <p>That search did not match any results, please try again.</p>
        </li>
    )
}

export default NoSearch;
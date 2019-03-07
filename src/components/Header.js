import React from 'react';
import SearchForm from './SearchForm';


const Header = (props) => {
    return (
        <header>
            <h2>React Gallery App</h2>
            <SearchForm onSearch={props.onSearch} />
        </header>

    )
}

export default Header;
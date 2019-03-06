import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
    return (
        <header>
            <h2>React Gallery App</h2>
            <SearchForm onSearch={props.onSearch} />
            <Nav />
        </header>

    )
}

export default Header;
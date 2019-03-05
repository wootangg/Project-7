import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

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
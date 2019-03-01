import React from 'react';

// properties aka props are passed as first parameter. object
function Header(props) {
    console.log('Header called', props);

    // props are immutable, mark the properties read only
    // props.title = "Hello" // React error
    // deconstruct     const title = props.title
    const {title} = props;

    // child should not modify the props data
    
    // title = "something"; // es6 lang error

    return (
        <div>
            <h2>{title}</h2>
            <hr />
        </div>
    )
}

export default Header;
import React from 'react';

// functional component
// presentational component

const Footer = (props) => {
    console.log('Footer called', props);

    //deconstruct
    const {year, 
           company,
           address: {city, state},
           countries
        } = props;


    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}</p>
            <p>City {city}, {state}</p>
            <p> {countries.join(', ')}</p>
        </div>
    )
}

export default Footer;
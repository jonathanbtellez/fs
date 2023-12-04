import React from 'react'

function CountriesList({ countries, onShow }) {
    return (
        countries.map(country => <div key={country.name.common}> <p>{country.name.common}</p> <button onClick={() => onShow(country.name.common)} >Show</button></div>)
    )
}

export default CountriesList
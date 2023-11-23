import React from 'react'

function Country({ country }) {
    let lenguagesList = []
    let lenguagesKeys = country ? Object.keys(country.languages) : [];
    for (let i = 0; i < lenguagesKeys.length; i++) {
        let key = lenguagesKeys[i];
        lenguagesList = [...lenguagesList, country.languages[key]];
    }

    return (
        <>
            {country
                ? (
                    <>
                        <h1>{country.name.common}</h1>
                        <ul>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                        </ul>
                        <h3>languages</h3>
                        <ul>
                            {
                                lenguagesList.map(lenguage => <li key={lenguage}>{lenguage}</li>)
                            }
                        </ul>
                        <img src={country.flags.png} alt={country.flags.alt} />
                    </>
                )
                : <p>There are not countries with that name</p>}
        </>
    )
}

export default Country
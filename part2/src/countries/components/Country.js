import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Country({ country }) {

    const [weather, setWeather] = useState(null)

    let lenguagesList = []
    let lenguagesKeys = country ? Object.keys(country.languages) : [];
    for (let i = 0; i < lenguagesKeys.length; i++) {
        let key = lenguagesKeys[i];
        lenguagesList = [...lenguagesList, country.languages[key]];
    }
    useEffect(() => {
        if (country)
            axios
                .get('http://api.weatherstack.com/current', {
                    params: {
                        access_key: process.env.REACT_APP_API_KEY,
                        query: `${country.capital}, ${country.name.common}`
                    }
                })
                .then(response => {
                    response.data.status === true ? setWeather(response.data) : setWeather(null)
                }).catch((error) => {
                    setWeather(null)
                    console.error(error)
                })
    }, [country])

    return (
        <>
            {country
                ? (
                    <>
                        <h3>{country.name.common}</h3>
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
                        <h3>weather in {country.capital}</h3>
                        {weather
                            ? <>
                                <p>Temperature: {weather.current.temperature}</p>
                                <img src={weather.current.weather_icons[0]} alt='weather icon' />
                            </>
                            : <>There is not information available in this moment</>
                        }

                    </>
                )
                : <p>There are not countries with that name</p>}
        </>
    )
}

export default Country
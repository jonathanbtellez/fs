import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import axios from "axios"
import CountriesList from "./components/CountriesList"
import Country from "./components/Country"

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredResult = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))


  return (
    <div>
      <h2>Country information</h2>
      <Filter handleShow={setshowAll} newSearch={newSearch} setNewSearch={setNewSearch} />
      {showAll
        ? <p>type the country name to get the information</p>
        : filteredResult.length > 11
          ? <p>Too many matches specify another filter</p>
          : filteredResult.length > 1
            ? <CountriesList countries={filteredResult} />
            : <Country country={filteredResult[0]} />}

    </div>
  )
}

export default App
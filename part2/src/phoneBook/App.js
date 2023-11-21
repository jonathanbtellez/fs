import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const filteredContacts = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleShow={setshowAll} newSearch={newSearch} setNewSearch={setNewSearch} />

      <h2>Add a new contact</h2>
      <Form persons={persons} handlePersons={setPersons} />
      <h2>Numbers</h2>
      ...
      <Persons persons={filteredContacts} />
    </div>
  )
}

export default App
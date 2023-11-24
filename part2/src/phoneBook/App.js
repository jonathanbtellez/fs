import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
import personsServices from "../services/persons"
const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)

  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
      <Persons persons={filteredContacts} handlePersons={setPersons} />
    </div>
  )
}

export default App
import { useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12345678' },
    { name: 'Carlos Hellas', number: '12345678' },
    { name: 'David Hellas', number: '12345678' },
    { name: 'Marin Hellas', number: '12345678' },
    { name: 'Aron Hellas', number: '12345678' },
    { name: 'Camilo Hellas', number: '12345678' },
  ])
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)

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
import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12345678' },
    { name: 'Carlos Hellas', number: '12345678' },
    { name: 'David Hellas', number: '12345678' },
    { name: 'Marin Hellas', number: '12345678' },
    { name: 'Aron Hellas', number: '12345678' },
    { name: 'Camilo Hellas', number: '12345678' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    if (event.target.value.length > 0) {
      setshowAll(false)
    } else {
      setshowAll(true)
    }
    setNewSearch(event.target.value)
  }

  const filteredContacts = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "") return
    if (newNumber === "") return

    const personInBook = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (personInBook) return alert(`${newName} already exist in the book`)

    setPersons([...persons, { name: newName, number: newNumber }])
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter contacts: <input value={newSearch} onChange={handleSearchChange} />

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>
        <ul>

          {filteredContacts.length > 0 ? filteredContacts.map(person => <li key={person.name}>{person.name} - {person.number}</li>) : <p>Not contacts find</p>}
        </ul>
      </div>
    </div>
  )
}

export default App
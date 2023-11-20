import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12345678' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

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
          {persons.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
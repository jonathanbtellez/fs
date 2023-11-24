import React, { useState } from 'react'
import personsServices from '../../services/persons'
function Form({ persons, handlePersons }) {

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

        const isPersonInBook = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        if (isPersonInBook) return alert(`${newName} already exist in the book.`)

        const isNumberInBook = persons.find(person => person.number.toLowerCase() === newNumber.toLowerCase())
        if (isNumberInBook) return alert(`${newNumber} already exist in the book.`)

        personsServices
            .create({ name: newName, number: newNumber })
            .then(createdPerson =>
                handlePersons([...persons, createdPerson])
            )

        setNewName("")
        setNewNumber("")
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form
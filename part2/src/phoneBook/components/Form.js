import React, { useState } from 'react'

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

        const personInBook = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

        if (personInBook) return alert(`${newName} already exist in the book`)

        handlePersons([...persons, { name: newName, number: newNumber }])
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
import React from 'react'
import Person from './Person'
import personsServices from '../../services/persons'

function Persons({ persons, handlePersons }) {
    const handleDelete = (id) => {
        const wasConfirmed = window.confirm('Are you sure?')
        if (wasConfirmed) {
            personsServices
                .deletePerson(id)
                .then(() => {
                    handlePersons(persons.filter(person => person.id !== id))
                })
        }
    }
    return (
        <ul>
            {persons.length > 0 ? persons.map(person => <Person key={person.id} person={person} onDelete={handleDelete} />) : <p>No contact found</p>}
        </ul>

    )
}

export default Persons
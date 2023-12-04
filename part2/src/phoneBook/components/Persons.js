import React from 'react'
import Person from './Person'
import personsServices from '../../services/persons'

function Persons({ persons, handlePersons, handleNotificationSuccess, handleNotificationError }) {
    const handleDelete = (id, name) => {
        const wasConfirmed = window.confirm(`Are you trying to delete ${name} Are you sure?`)
        if (wasConfirmed) {
            personsServices
                .deletePerson(id)
                .then(() => {
                    handlePersons(persons.filter(person => person.id !== id))
                    handleNotificationSuccess(
                        `${name} was removed`
                    )
                    setTimeout(() => {
                        handleNotificationSuccess(null)
                    }, 5000)
                }).catch(() => {
                    handleNotificationError(`Person '${name}' was already removed from server`)
                    setTimeout(() => {
                        handleNotificationError(null)
                    }, 5000)
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
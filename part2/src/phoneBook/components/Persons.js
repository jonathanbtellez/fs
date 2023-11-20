import React from 'react'
import Person from './Person'

function Persons({ persons }) {
    return (
        <ul>
            {persons.length > 0 ? persons.map(person => <Person key={person.name} person={person} />) : <p>No contact found</p>}
        </ul>

    )
}

export default Persons
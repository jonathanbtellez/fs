import React from 'react'

function Person({ person, onDelete }) {
    return (
        <li key={person.id}>{person.name} - {person.number}    <button onClick={() => onDelete(person.id)}>delete</button></li>
    )
}

export default Person
import React from 'react'
import Part from './Part'

function Content({ parts }) {
    return (
        <ul>
            {
                parts.map(part =>
                    <Part key={part.id} part={part} />
                )
            }
            <p><b>Total of  {parts.reduce((sum, part) => sum += part.exercises, 0)}  exercises</b></p>
        </ul>

    )
}

export default Content
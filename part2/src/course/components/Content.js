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
            <p><b>Total: </b> {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </ul>

    )
}

export default Content
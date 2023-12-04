import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

function Curso({ course }) {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>)
}

export default Curso
import './App.css';

const Header = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>{part} - {exercises}</p>
    </div>
  )
}

const Footer = ({ exercises }) => {
  return (
    <div>
      <p>Number of exercises = {exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course} />
      <Content part={parts} />
      <Footer exercises={parts} />
    </div>
  )
}

export default App;

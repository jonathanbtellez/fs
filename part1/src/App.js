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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Footer exercises={part1.exercises + part2.exercises + part3.exercisescd} />
    </div>
  )
}

export default App;

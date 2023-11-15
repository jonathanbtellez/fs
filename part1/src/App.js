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
      <Part course={props.part.parts[0]} />
      <Part course={props.part.parts[1]} />
      <Part course={props.part.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.course.name} - {props.course.exercises}</p>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div>
      <p>Number of exercises = {props.exercises.parts[0].exercises + props.exercises.parts[1].exercises + props.exercises.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header title={course.name} />
      <Content part={course} />
      <Footer exercises={course} />
    </div>
  )
}

export default App;

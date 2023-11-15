import { useState } from 'react';
import './App.css';

// Este es lugar correcto para definir un componente
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// No defina componentes adentro de otro componente

const Display = ({ value, text }) => <div>{text} {value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />

      <h1>Statistics</h1>
      <Display value={good} text="Good" />
      <Display value={neutral} text="Neutral" />
      <Display value={bad} text="Bad" />


    </div>
  )
}
export default App;

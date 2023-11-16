import { useState } from 'react';
import './App.css';

// Este es lugar correcto para definir un componente
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const { good, neutral, bad, getAllVotes, getPositive, getAverage } = props.values
  return (
    <>
      <h1>Statistics</h1>
      {getAllVotes() ?
        <table>
          <tbody>
            <tr><td><StatisticsLine
              value={good}
              text="Good" /></td></tr>
            <tr><td><StatisticsLine
              value={neutral}
              text="Neutral" /></td></tr>
            <tr><td><StatisticsLine
              value={bad}
              text="Bad" /></td></tr>
            <tr><td><StatisticsLine
              value={getAllVotes()}
              text="All" /></td></tr>
            <tr><td><StatisticsLine
              value={getPositive()}
              text="Positive" /></td></tr>
            <tr><td><StatisticsLine
              value={getAverage()}
              text="Average" /></td></tr>
          </tbody>
        </table> : <StatisticsLine text="No feedback given" />}
    </>
  )
}

// No defina componentes adentro de otro componente

const StatisticsLine = ({ value, text }) => <p>{text} {value ? value : ''}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const getAllVotes = () => good + neutral + bad
  const getPositive = () => (good * 100) / getAllVotes()
  const getAverage = () => (getAllVotes() / getAllVotes())



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />
      <Statistics values={{ good, neutral, bad, getAllVotes, getPositive, getAverage }} />
    </div>
  )
}
export default App;

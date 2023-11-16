import { useState } from 'react';
import './App.css';

const App = (props) => {

  const arrayVotes = Array(6).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arrayVotes)

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * (5 - 0 + 1) + 0))
  const increaseVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  return (
    <div>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <button onClick={increaseVote}>vote
      </button>
      <button onClick={nextAnecdote}>Next Anecdote
      </button>
    </div>
  )
}




export default App;

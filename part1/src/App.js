import { useState } from 'react';
import './App.css';

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * (5 - 0 + 1) + 0))
  return (
    <div>
      <div>
        {props.anecdotes[selected]}
      </div>
      <button onClick={nextAnecdote}>Next Anecdote
      </button>
    </div>
  )
}




export default App;

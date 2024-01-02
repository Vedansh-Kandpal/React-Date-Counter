import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )

}


function Counter() {

  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setRange(0)
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        &nbsp;

        <span>step:{range} </span>
      </div>
      <br />
      <br />
      <div>
        <button onClick={() => setCount((c) => c - range)}>-</button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))} /> &nbsp;

        <button onClick={() => setCount((c) => c + range)}>+</button><br /> <br />
      </div>

      <h2>

        <span>{count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>

      </h2>
      {count !== 0 || range !== 1 ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}

    </div>
  )

}
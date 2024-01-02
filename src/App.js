


import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )

}

function Counter() {

  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  function stepDown() {
    setStep((s) => s - 1)
  }
  function stepUp() {
    setStep((s) => s + 1)
  }

  function countDown() {
    setCount((c) => c - step)
  }
  function countUp() {
    setCount((c) => c + step)
  }


  let newCount = count * step;
  // console.log(newCount)
  // console.log(count)
  // console.log(step)
  let time = new Date()

  let date = time.toDateString();


  return (
    <>
      <button onClick={stepDown} >- </button>
      step:<span>{step} </span>
      <button onClick={stepUp} >+</button> <br /> <br />

      <button onClick={countDown}>-</button>
      count:<span>{count} </span>
      <button onClick={countUp}>+</button><br /> <br />


      <h2>
        <span>{count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}</span>
        <span>{date}</span>
      </h2>
    </>
  )

}
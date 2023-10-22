import { useState } from "react";

import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date('2023-10-22');
  date.setDate(date.getDate() + count)

  return (
    <div className="App">
      <div className="step">
        <button onClick={() => (step > 0 ? setStep(step - 1) : setStep(step))}>
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount(count - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div className="result">
        <p>{count} days from today is {date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default App;

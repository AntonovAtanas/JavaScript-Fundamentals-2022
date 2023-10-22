import { useState} from 'react'

import './App.css';


function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step () {
  const [step, setStep] = useState(1)

  return (
    <div className="step">
      <button>-</button>
      <p>Step: {step}</p>
      <button>+</button>
    </div>
  )
}

export default App;

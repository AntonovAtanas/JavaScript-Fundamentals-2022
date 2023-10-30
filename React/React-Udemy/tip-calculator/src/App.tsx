import { useState } from 'react'
import './App.css'

import Bill from './components/Bill'
import FriendFeedback from './components/FriendFeedback'
import TotalPrice from './components/TotalPrice'
import YourFeedback from './components/YourFeedback'

function App() {
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function onReset() {
    setBill(() => 0);
    setYourTip(() => 0);
    setFriendTip(() => 0);
  }

  return (
    <div className='container'>
      <Bill setBill={setBill} bill={bill} />
      <YourFeedback setYourTip={setYourTip} yourTip={yourTip} />
      <FriendFeedback setFriendTip={setFriendTip} friendTip={friendTip} />
      <TotalPrice bill={bill} yourTip={yourTip} friendTip={friendTip} onReset={onReset} />
    </div>
  )
}

export default App

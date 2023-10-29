import './App.css'

import Bill from './components/Bill'
import FriendFeedback from './components/FriendFeedback'
import ResetButton from './components/ResetButton'
import TotalPrice from './components/TotalPrice'
import YourFeedback from './components/YourFeedback'

function App() {

  return (
    <div className='container'>
      <Bill />
      <YourFeedback />
      <FriendFeedback />
      <TotalPrice />
      <ResetButton />
    </div>
  )
}

export default App

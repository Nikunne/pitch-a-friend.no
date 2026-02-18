import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
        <div className="content">
            <div className="patent-container">
                <h1>Pitch a Friend</h1>
                <p>"Pitch a friend" er ikke et registrert varemerke i Norge</p>
                <img className="patent-img" src="./Patentstyret.png" alt="Patentstyret logo" />
            </div>

            <div className="patent-container">
                <h1>Pitch a Friend</h1>
                <p>"Pitch-a-friend" er ikke et registrert varemerke i Norge</p>
                <img className="patent-img" src="./Patentstyret2.png" alt="Patentstyret logo" />
            </div>



            <p>Don´t sue me please</p>
            <p>This site is not driven by commercial interests</p>
        </div>

    </div>
  )
}

export default App

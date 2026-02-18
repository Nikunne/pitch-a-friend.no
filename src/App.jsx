import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatentPage from "../components/PatentPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
        <div className="content">
            <div className="patent-container">
                <PatentPage url={"https://search.patentstyret.no/advanced/#/trademark?cs=pitch%20a%20friend&size=50"} img={"Patentstyret.png"} trademark={"Pitch a friend"}/>
            </div>

            <div className="patent-container">
                <PatentPage url={"https://search.patentstyret.no/advanced/#/trademark?cs=pitch%20a%20friend&size=50"} img={"Patentstyret2.png"} trademark={"Pitch-a-friend"}/>
            </div>



            <p>Don´t sue me please</p>
            <p>This site is not driven by commercial interests</p>
            <p>This page is not copyrighted 2026</p>
        </div>

    </div>
  )
}

export default App

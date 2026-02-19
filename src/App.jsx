import './App.css'
import PatentPage from "../components/PatentPage.jsx";

function App() {

  return (
    <div id="main">
        <div className="content">
            <div className="patent-container">
                <PatentPage url={"https://search.patentstyret.no/advanced/#/trademark?cs=pitch%20a%20friend&size=50"} img={"Patentstyret.png"} trademark={"Pitch a friend"}/>
            </div>

            <div className="patent-container">
                <PatentPage url={"https://search.patentstyret.no/advanced/#/trademark?cs=pitch-a-friend&size=50"} img={"Patentstyret2.png"} trademark={"Pitch-a-friend"}/>
            </div>



            <p>Don´t sue me please</p>
            <p>This site is not run by commercial interests</p>
            <p>This page is not copyrighted 2026</p>

            <a href="mailto:niklas.unneland@proton.me">Contact</a>
        </div>

    </div>
  )
}

export default App

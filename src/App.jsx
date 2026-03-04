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

            <a href={"https://branddb.wipo.int/en/similarname/brand/WO500000001906662?sort=score%20desc&start=0&rows=30&asStructure=%7B%22_id%22:%22b60c%22,%22boolean%22:%22AND%22,%22bricks%22:%5B%7B%22_id%22:%22b60d%22,%22key%22:%22brandName%22,%22value%22:%22pitch-a-friend%22,%22strategy%22:%22Simple%22%7D%5D%7D&_=1772663610578&fg=_void_&i=1"}>WIPO-link</a>
            <p>Don´t sue me please</p>
            <p>This site is not run by commercial interests</p>
            <p>This page is not copyrighted 2026</p>

            <a href="mailto:niklas.unneland@proton.me">Contact</a>
        </div>

    </div>
  )
}

export default App

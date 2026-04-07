function PatentPage(props) {
    return (
        <>
            <h2>{props.trademark}</h2>
            <p> {props.trademark + " var ikke et registrert varemerke i Norge, dagens status kan sjekkes med å klikke på source"}</p>
            <img className="patent-img" src={"/"+props.img} alt="Patent logo" />
            <a target={"_blank"} className={"linken"} href={props.url}> <img className="mini" src={"/Patentstyret-logo.png"}/> <p className={"mini-text"}>Source</p></a>
        </>
    )
}

export default PatentPage
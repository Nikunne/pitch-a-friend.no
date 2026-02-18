function PatentPage(props) {
    return (
        <>
            <h3>{props.trademark}</h3>
            <p> {props.trademark + " er ikke et registrert varemerke i Norge"}</p>
            <img className="patent-img" src={"/"+props.img} alt="Patent logo" />
            <a href={props.url}> Patentstyret-Link</a>
        </>
    )
}

export default PatentPage
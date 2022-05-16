const Person = (props) =>{
    const ofAge = props.age >= 18
    return(
        <div>
            <p>Learn some information about this person</p>
            <p>{props.name}</p>
            <h3>{ofAge ? "Please go vote" : "You must be 18"}</h3>
            <ul>{props.hobbies.map(h=>
                (
                <li>{h}</li>
            )
            )}
            </ul>
        </div>
    )
}
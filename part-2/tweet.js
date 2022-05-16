const Tweet = (props) =>{
    return(
        <div>
            <h2>{props.username}</h2>
            <h3>{props.name}</h3>
            <p>{props.date}</p>
            <p>{props.msg}</p>


        </div>
    )
}
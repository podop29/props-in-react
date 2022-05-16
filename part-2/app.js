const App = () =>{
    return(
        <div>
            <Tweet username="Podop" name="Stevan" date="5/16/2022" msg="HeLLo Testing"/>
            <Tweet username="steve" name="stevie" date="5/16/2022" msg="I love REACT!!"/>
            <Tweet username="softwareMan" name="green" date="5/16/2022" msg="Wow wow WWow!"/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
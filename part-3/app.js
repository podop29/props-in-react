


const App = () =>{
    return(
        <div>
            <Person name="stevan" age="20" hobbies={["tennis", "backend", "coding"]}/>
            <Person name="jeremy" age="17" hobbies={ ["soccor", "workingout", "frontend"]}/>
            <Person name="fadi" age="20" hobbies={["biking", "running", "food"]}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
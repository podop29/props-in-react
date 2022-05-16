const App = () =>{
    return(
        <div>
            <FirstComponent/>
            <NamedComponent name="stevan"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
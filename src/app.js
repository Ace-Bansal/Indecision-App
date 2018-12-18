class Header extends React.Component{
    render(){
        return <p>From the header</p>
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>Options Component</p>
            </div>
        )
    }
}

class AddOptions extends React.Component{
    render(){
        return (
            <div>
                <p>AddOptions Component</p>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))
class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your hands in the life of a computer!";
        const options = ['Option one', 'Option two', 'Option three', 'Option five'];

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
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

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.option}
            </div>
        )
    }
}


class Options extends React.Component{
    printAllOptions(optionsArray){
        let optionList = optionsArray.map(x => <Option option={x} />)
        return optionList;
    }
    render(){
        return (
            <div>
                <h3>Here are the options</h3>
                {this.printAllOptions(this.props.options)}
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
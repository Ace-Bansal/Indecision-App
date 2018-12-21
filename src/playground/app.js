class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
        this.state = {
            options: this.props.options,
            chosenOption: ""
        }
    }
    componentDidMount() {
        const stringJSON = localStorage.getItem("options");
        const options = JSON.parse(stringJSON);
        if (options) {
            this.setState(() => ({ options }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("updated")
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    selectOption() {
        let x = Math.floor((Math.random() * this.state.options.length));
        this.setState(() => ({ chosenOption: this.state.options[x] }))
    }
    handleFormSubmit(newOption) {
        if (newOption.length == 0) {
            return 'You tried to enter an empty string'
        } else {
            if (this.state.options.indexOf(newOption) > -1) {
                return 'This option already exists'
            }
        }
        this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
    }
    handleRemoveSingle(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((x) => {
                    if (x != option) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        })
    }
    render() {
        const subtitle = "Put your hands in the life of a computer!";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveSingle={this.handleRemoveSingle} />
                <AddOptions handleFormSubmit={this.handleFormSubmit} />
                <Action chosenOption={this.state.chosenOption} hasOptions={this.state.options.length > 0 ? true : false} selectOption={this.selectOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision App"
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.selectOption} disabled={!props.hasOptions}>What should I do?</button>
            {props.hasOptions ? <h2>{props.chosenOption}</h2> : undefined}
        </div>
    )
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
    }
    handleRemoveSingle() {
        this.props.handleRemoveSingle(this.props.option)
    }

    render() {
        return (
            <div>
                <p>{this.props.option}</p>
                <button onClick={this.handleRemoveSingle}>Remove</button>
            </div>
        )
    }
}


class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
    // }
    // handleRemoveSingle(option) {
    //     this.props.handleRemoveSingle(option);
    // }

    render() {
        return (
            <div>
                {this.props.options.length > 0 ? <h3>Here are the options</h3> : <h3>No Options</h3>}
                {this.props.options.map(x => <Option handleRemoveSingle={this.props.handleRemoveSingle} key={x} option={x} />)}
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}


class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        let addedOption = e.target.elements.input.value.trim();
        let error = this.props.handleFormSubmit(addedOption);
        this.setState(() => ({ error }));


        e.target.elements.input.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error != undefined ? <h3>{this.state.error}</h3> : undefined}
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='input' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
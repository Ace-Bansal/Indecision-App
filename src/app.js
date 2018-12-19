class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            options: [],
            chosenOption: ""
        }
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    selectOption() {
        let x = Math.floor((Math.random() * this.state.options.length));
        this.setState(() => {
            return {
                chosenOption: this.state.options[x]
            }
        })
    }
    handleFormSubmit(newOption) {
        if (newOption.length == 0) {
            return 'You tried to enter an empty string'
        } else {
            if (this.state.options.indexOf(newOption) > -1) {
                return 'This option already exists'
            }
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOption)
            }
        })
    }
    render() {
        const title = "Indecision App";
        const subtitle = "Put your hands in the life of a computer!";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
                <AddOptions handleFormSubmit={this.handleFormSubmit} />
                <Action chosenOption={this.state.chosenOption} hasOptions={this.state.options.length > 0 ? true : false} selectOption={this.selectOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.selectOption} disabled={!props.hasOptions}>What should I do?</button>
            {props.hasOptions ? <h2>{props.chosenOption}</h2> : undefined}
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.option}
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            {props.options.length > 0 ? <h3>Here are the options</h3> : <h3>No Options</h3>}
            {props.options.map(x => <Option option={x} />)}
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    )
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
        this.setState(() => {
            return {
                error
            }
        })


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
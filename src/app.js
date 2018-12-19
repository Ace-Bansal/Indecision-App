class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            options: ['Option one', 'Option two', 'Option three'],
            chosenOption: ""
        }
    }
    handleRemoveAll(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    selectOption(){
        let x = Math.floor((Math.random() * this.state.options.length));
        this.setState(() => {
            return {
                chosenOption: this.state.options[x]
            }
        })
    }
    handleFormSubmit(newOption){
        if(newOption.length == 0){
            return 'You tried to enter an empty string'
        } else{
            if(this.state.options.indexOf(newOption) > -1){
                return 'This option already exists'
            }
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOption)
            }
        })
    }
    render(){
        const title = "Indecision App";
        const subtitle = "Put your hands in the life of a computer!";
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOptions handleFormSubmit={this.handleFormSubmit}/>
                <Action chosenOption={this.state.chosenOption} hasOptions={this.state.options.length > 0 ? true : false} selectOption={this.selectOption}/>
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
                <button onClick={this.props.selectOption} disabled={!this.props.hasOptions}>What should I do?</button>
                {this.props.hasOptions ? <h2>{this.props.chosenOption}</h2> : undefined}
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
                {this.props.options.length > 0 ? <h3>Here are the options</h3> : <h3>No Options</h3>}                
                {this.printAllOptions(this.props.options)}
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e){
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
    render(){
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
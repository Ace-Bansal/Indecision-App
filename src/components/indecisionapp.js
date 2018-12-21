import React from 'react';
import AddOptions from './add-options'
import Options from './options'
import Action from './action'
import Header from './header'


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        chosenOption: ""
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }
    selectOption = () => {
        let x = Math.floor((Math.random() * this.state.options.length));
        this.setState(() => ({ chosenOption: this.state.options[x] }))
    }
    handleFormSubmit = (newOption) => {
        if (newOption.length == 0) {
            return 'You tried to enter an empty string'
        } else {
            if (this.state.options.indexOf(newOption) > -1) {
                return 'This option already exists'
            }
        }
        this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
    }
    handleRemoveSingle = (option) => {
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

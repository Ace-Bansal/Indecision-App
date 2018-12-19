class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAdd(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleSub(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleSub}>Sub</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;

// const addOne = () => {
//     count++;
//     renderApp();
// };

// const subOne = () => {
//     count--;
//     renderApp();
// };

// const reset = () => {
//     count = 0;
//     renderApp();
// };



// const appRoot = document.getElementById('app');


// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>increase</button>
//             <button onClick={subOne}>decrease</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
    
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderApp();
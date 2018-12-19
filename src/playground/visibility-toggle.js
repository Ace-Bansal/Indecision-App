class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 0
        }
    }
    handleClick(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        console.log(this.state.count)
    }
    btnText(){
        if(this.state.count%2 == 0){
            return 'Show Details'
        } else{
            return "Hide Details"
        }
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleClick}>{this.btnText()}</button>
                {this.state.count%2 == 0 ? undefined : <p>Here are the details.</p>}                
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))





// let btnText = "Show Details";
// let count = 0;

// const showDetails = () => {
//     count++;
//     document.getElementById('para').classList.toggle('hide');
//     if(count%2 != 0){
//         btnText = "Hide Details";
//     } else{
//         btnText = "Show Details";
//     }
//     renderApp();
// }

// const renderApp = () => {
//     var template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{btnText}</button>
//             <p id='para' className='hide'>Here are the hidden details</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);    
// }


// var appRoot = document.getElementById('app');
// renderApp();


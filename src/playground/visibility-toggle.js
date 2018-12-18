let btnText = "Show Details";
let count = 0;

const showDetails = () => {
    count++;
    document.getElementById('para').classList.toggle('hide');
    if(count%2 != 0){
        btnText = "Hide Details";
    } else{
        btnText = "Show Details";
    }
    renderApp();
}

const renderApp = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{btnText}</button>
            <p id='para' className='hide'>Here are the hidden details</p>
        </div>
    )
    ReactDOM.render(template, appRoot);    
}


var appRoot = document.getElementById('app');
renderApp();


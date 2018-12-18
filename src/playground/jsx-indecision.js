console.log("App.js is running!");

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer!',
    options: []
}

const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp(); 
    }
}

const renderArray = () => {
    const listOptions = app.options.map(x => <li>{x}</li>)
    return listOptions;
}

const wipe = () => {
    app.options = [];
    renderApp();
}

let chosenOption = "";

const choose = () => {
    if(app.options.length != 0){
        let x = Math.floor((Math.random() * app.options.length));
        chosenOption = app.options[x];
        renderApp();
    }
}

const chosenOptionShow = () => {
    if(chosenOption != ''){
        return <p>The Chosen option is: {chosenOption}</p>
    }
}

const checkBtnDisable = () => {
    if(app.options.length == 0){
        return true;
    } else{
        return false;
    }
}

const renderApp = () => {
    const template = (
        <div>
            {app.title? <h1>{app.title}</h1>: undefined}
            {app.subtitle? <h3>{app.subtitle}</h3>: undefined}    
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>    
            <ol>
                {renderArray()}
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Enter options" name="option"/>
                <button>Submit</button>
            </form>
            <button onClick={wipe}>Wipe All</button>
            <button disabled={checkBtnDisable()} onClick={choose}>Choose an option</button>
            {chosenOptionShow()}
        </div>
    )

    ReactDOM.render(template, appRoot)
    
}


const appRoot = document.getElementById('app');


renderApp();
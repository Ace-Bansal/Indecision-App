let count = 0;

const addOne = () => {
    count++;
    renderApp();
};

const subOne = () => {
    count--;
    renderApp();
};

const reset = () => {
    count = 0;
    renderApp();
};



const appRoot = document.getElementById('app');


const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>increase</button>
            <button onClick={subOne}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    
    ReactDOM.render(templateTwo, appRoot);
}

renderApp();
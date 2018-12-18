const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 5,
    multiply(){
        const newNums = this.numbers.map(x => x*this.multiplyBy);
        return newNums;
    }
}

console.log(multiplier.multiply());

var template = (
    <h1>Heyoo</h1>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
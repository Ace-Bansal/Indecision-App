class Person {
    constructor(name = "Anon", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDesc(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getDesc(){
        let desc = super.getDesc();
        if(this.hasLocation()){
            desc = `${desc} He lives in ${this.homeLocation}.`
        }
        return desc;
    }
}

const me = new Traveller("Ekansh", 21, "Dehradun");
console.log(me.getDesc());

const other = new Traveller();
console.log(other.getDesc())
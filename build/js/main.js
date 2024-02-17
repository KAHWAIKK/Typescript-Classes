"use strict";
/* Review of a basic class */
//Basic structure of a class
class Coder {
    constructor(name) {
        this.name = name;
    }
}
//Larger class
class CoderA {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//Following the DRY principle guidelines you can use visibility modifiers/member otherwise known as data/access modifiers - use public(meaning it can be publicly accessed) or readonly(meaning it cannot be modified)/private(meaning the member cannot be accessed publicly) and protected
//Visibility modifiers 
class CoderB {
    //properties and methods inside the class are called members. You must however assign it in the constructor function
    // name: string;
    // music: string;
    // age: number;
    // lang: string;
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    //Adding a method to our constructor
    getAge() {
        return `Hello, I'm ${this.age}`;
        //age is private and can only be accessed from within the constructor class
    }
}
//Say you want to add a member that you did not want to instantiate right away, maybe its being handled by a third party library or API service, we could use the assertion operator instead
class CoderC {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//Private and protected example
//instatiating our class
const Kevin = new CoderB('Kevin', 'Rhumba', 27);
console.log(typeof Kevin); //object
console.log(Kevin); //retuen the coderB object
console.log(Kevin.music); //return Rhumba since its a public member and can be accessed outside of the class
console.log(Kevin.name); //returns Kevin since its a public member and can be accessed outside of the class
//console.log(Kevin.age)
//TS shows error since its a private member and can only be accessed within the class
//console.log(Kevin.lang)
//TS shows error since its a protected member and can only be accessed when the class extends this member to another sub-class
console.log(Kevin.getAge()); //return Hello I'm 27
//Extend for SubClasses
class webDev extends CoderB {
    constructor(computer, name, music, age) {
        //before you assign anything here,you need to a call super that will receive the members from the main class
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
        //we can still access lang since we extemnded the coderB class 
    }
}
//instatiating our sub-class
const Kahwai = new webDev('Mac', 'Kevin', 'SoftPop', 25);
console.log(Kahwai); //returns the class webdev with object Kevin {
//     "name": "Kevin",
//     "music": "SoftPop",
//     "age": 25,
//     "lang": "Typescript",
//     "computer": "Mac"
// }
console.log(typeof Kahwai); // object
//console.log( Kahwai.age)
// TS rejects as it can't be extended since it has a visibility modifier of private
console.log(Kahwai.name); // kevin
console.log(Kahwai.music); // softpop
console.log(Kahwai.getLang()); // I write typescript
//implementing this to a class
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
//instantiation
const Page = new Guitarist('Kagwima', 'guitar');
console.log(Page.play('strums')); //kagwima strums the guitar
/* -------------------------------------- */
/* STATIC CLASS MEMBERS */
class Peeps {
    //static methods
    static getCount() {
        return Peeps.count; //notic that we dont use the this keyword here. We refer to the class itself. 
        //Static keyword does not apply to any instantiation of this class,it will only keep track of the count in the class only.
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
//static member
Peeps.count = 0;
//instatiating class peeps
const Any = new Peeps('Any');
const john = new Peeps('john');
const Emmy = new Peeps('Emmy');
console.log(Peeps.count); //console returns 3 as we have instatiated the class 3 times
/* GETTERS AND SETTERS */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
//instantiate
const myBands = new Bands();
myBands.data = ['Nels', 'young'];
console.log(myBands);
console.log(myBands.data); //[
//     "Nels",
//     "young"
// ]
myBands.data = [...myBands.data, 'Jay-Z'];
console.log(myBands.data);
// [
//     "Nels",
//     "young",
//     "Jay-Z"
// ]
myBands.data = ['Van Halen'];
console.log(myBands.data);

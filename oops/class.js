// we use class keyword to declare class
class person{
    constructor(Name,year){
        this.Name = Name;
        this.year = year;
    }
    //create method
    age(x){
       return x - this.year;
    }
}

// you should craete object of this class for invoke
const p = new person("ronak",2001);
console.log(p)
console.log(p.age(2024));
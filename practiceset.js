class complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary
    }
    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }

}
let a = new complex(2,5);
let b = new complex(6,2);
a.real = 10;
b.real=10;

console.log(a.add(b));
console.log(a.real ,a.imaginary)
// console.log(`${a.real} + ${b.real}`);
let a = {
    NAme :"ronak",
    age:22
}

let p  = {
    run:()=>{
        console.log("hello ronak");
    }
}
a.__proto__ = p;
a.run();

p.__proto__ = {
    call:()=>{
        console.log("ronak called");
    }

}
a.call();
// we can create a proto type
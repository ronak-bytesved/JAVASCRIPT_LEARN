// class a{
//     add(){
//         console.log("add numner");
//     }
// }
// class b extends a{
//     add(){
//         console.log("the number is 70");
//     }
// }
// class c extends b{
//     add(){
//         console.log("this is last method");
//     }
// }

// let obj = new a();
// let obj1 = new b();
// let obj2 = new c();

// obj.add();
// obj1.add();
// obj2.add();

class a{
    add(x,y){
        console.log(x * y);
    }
}
class b extends a{
    add(a,b){
        super.add(a,b);
        console.log("this is exucuted");
    }
}
let obj = new b();
// console.log(obj.add(2,3));
obj.add(4,5);

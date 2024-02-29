// let p = new Promise((resolve,reject)=>{
// console.log("your promise is pending")
// setTimeout(() => {
// console.log("you promise is fullfiled");
// resolve(true);
// reject(new Error("this is rejected"));
// }, 2000);
//
// });
// let p1 = new Promise((resolve,reject)=>{
// console.log("your promise is pending")
// setTimeout(() => {
// console.log("you promise is fullfiled");
// resolve(true);
// reject(new Error("this is rejected"));
// }, 2000);
//
// });
//
//
// to get the error
// p1.then(()=>{
// console.log("this is good");
// },(error)=>{
// console.log("new error occure")
// })

//TO CATCH THE error
// p1.catch((error)=>{
// console.log("some errro occure p1");
// })
// console.log(p,p1)

//promise chaining =>{
//
// let api = "https://dummy.restapiexample.com/api/v1/employees";
//
// let employee = fetch(api);
// console.log(employee);
// employee.then(data =>{
// console.log(data);
// })

//example of promise

var cart = ["toys","cars","iron"];

const validatecart = (cart) => {
    return cart.length > 0;
}

validatecart(cart);

const promise = createCart(cart)
    .then((orderId) => {
        console.log(orderId);
        return orderId;
    })
    .then((orderId) => {
        return proccessToPayment(orderId);
    })
    .then((payment) => {
        console.log(payment);
    })
    .catch((err) => {
        console.log(err.message);
    });

function createCart(cart) {
    return new Promise((resolve, reject) => {
        if (!validatecart(cart)) {
            const err = new Error("Your cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve("Your orderId is: " + orderId);
            }, 5000);
        }
    });
}

const payment = 1000;

function proccessToPayment(orderId) {
    return new Promise((resolve, reject) => {
        console.log("Your payment is being processed for this id: " + orderId);
        if (payment) {
            setTimeout(() => {
                resolve("Your payment is done: " + payment);
            }, 7000);
        }
    });
}
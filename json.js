// console.log("hello json")


// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.


const text = '{"employee" : [' +
'{"firstname":"Ronak","age":"22"},' +
'{"firstname":"Ronak","age":"22"},' +
'{"firstname":"Ronak","age":"22"}]}';


const obj = JSON.parse(text);
//full json
console.log(obj);
//you can get perticular name and object properties
console.log(obj.employee[1].firstname + obj.employee[1].age);





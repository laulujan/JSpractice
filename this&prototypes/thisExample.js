// // let newProp = 5;

// // var x = {
// //     prop: 35,
// //     f: function(){
// //         return this.prop;
// //     },

// //     a: ()=> {
// //         return x.prop;
// //     }
// // }

// // console.log(x.f());
// // console.log(x.a());

// // const y = Object.create(x);
// // const array = [];
// // array.push(3);
// // console.log(array);
// // y.b =3;

// // console.log(y.b);

// // x.newProp = {};
// // x.newProp.a = 5;
// // x.newProp.b = {};
// // x.newProp.b.a = {};
// // x.func = () => console.log("hi!");
// // x.func();
// // console.log(x);


// var x = {
//     valor1: 35,
//     valor2: 50,
//     valor3: 20,
//     valor4: "hola",
// }
// var y = {...x};
// console.log(Object.keys(y));

// if(!Array.prototype.hasOwnProperty("adding")){
//     Object.defineProperty(Array.prototype, "adding", {
//         value: function(){
//             return this.reduce((current, x) => current + x, 0);
//         }
//     });
// }

// const newValues = [3, 2, 1];
// console.log(newValues.adding());


// function sumar (obj){
//     return Object.keys(obj).reduce(((current, x) => 
//     current + obj[x]), 0);
// }

// console.log(sumar(x));

// function sumar1 (arr){
//     return arr
//     .reduce(((current, x) =>
//     current + x), 0);
// }
// const valores = Object.keys(x).map((prop) => x[prop]);

// // console.log(sumar1(valores));

// var x = {
//     valor1: 35,
//     valor2: 50,
//     valor3: 20,
//     valor4: "hola",
// }

// const newArray = Object
// .keys(x)
// .filter(y => typeof x[y] == "number")
// .map((y) => x[y]);

// console.log(newArray);

const user = {
    name: "",
    email: "",

    login: function (){
        alert(`Hi ${this.name}`);
    },
    logout: function () {
        alert(`Bye ${this.name}`);
    }
}

// let admin = Object.create(user);
// admin.sales= 5000,
// admin.checkSales= function(){
//     alert(`You sold $${this.sales}`)
// }


// let customer = Object.create(user);
// customer.balance= 500,
// customer.checkBalance= function() {
//     alert (`you have $${this.balance}`)
// }


// console.log(customer.checkBalance());

let Admin = function(){
    const admin = Object.create(user);
    admin.name = name,
    admin.email = email,
    admin.sales = 5000;
    admin.checkSales = function(){
    alert(`You have $${this.sales}`)
    }
    return admin;
}

let Customer = function(name = "usuario", email= "user@gmail.com"){
    const customer = Object.create(user);
    customer.name = name || "user",
    customer.email = email,
    customer.balance = 500,
    customer.checkBalance = function () {
        alert(`You have $${this.balance}`)
    }
    return customer;

}

const a = new Customer("laura","laura@gmail.com")
console.log(a);
console.log(a.name);
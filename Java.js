// console.log( "hey hunain how are u")

// alert("hey")


// var
// var hunain1 = "hunain kese "
// console.log(hunain1)

// let

// let hunain1 = "20"
// console.log(hunain1)


// let hunain = "30"
// console.log(typeof(hunain))


// let nainko =  "10" % 3
// console.log(nainko) 



// function calculator() {
//     let num1 = parseFloat(prompt("enter your fiest number"))
//     let num2 = parseFloat(prompt("enter your Second number"))


// let plus = num1 + num2
// let minus = num1 + num2
// let multiply = num1 * num2
// let divide = num1 !== 0 && num1/num2

// document.body.innerHTML = `
// <h2>Calculator Result:</h2>
// <p>${num1} + ${num2} = ${plus}</p>
// <p>${num1} - ${num2} = ${minus}</p>
// <p>${num1} * ${num2} = ${multiply}</p>
// <p>${num1} / ${num2} = ${divide}</p>
// `;;
    
// }

// calculator()


// console.log(names)
// function name() {
//     let names = "hunain"
    
// }

// name()


// function clousre() {
//     let name = "hunain"

//     function inner() {
//         console.log("hello", name)
        
//     }
//     return inner
    
// }
// const greet = clousre()
// greet()

// function counter() {
//     let count = 0; // closure variable

//     return function() { // inner function
//         count++; // increment
//         console.log("This is my counter:", count);
//     }
// }

// const myCounter = counter(); // outer function call

// myCounter(); // 1
// myCounter(); // 2
// myCounter(); // 3
// myCounter(); // 4
// myCounter(); // 4



// const conetxt = {
//     name:"hunain",
//     email:"hunainkahN@121gmail.com",
//     password:"hunain112233",

//     greet:function() {
//         console.log("this is my name", this.name, "this is my email",this.email)
        
//     }
// };
// conetxt.greet()




// const obj = {
//     name:"hunain",
//     sayname:"this is cuttee pie",
//     greet:function(){
//         console.log("this is my name",this.name,"this is my sayname",this.sayname)
//     }
// };
// obj.greet();



// const arr  =  [1,2,3,4,5,6,8,10]

// const filtered = arr.filter(function(filterednum) {
//     return filterednum % 3 ===0;

    
// })
// console.log(filtered)


// const arry = arr.map(function(num) {
//     return num * 2;
    
// })
// console.log(arry)

// const arr = [1,2,3]

// const reduces = arr.reduce(function(num1,num2){
//     return num1 + num2;
// })
// console.log(reduces)


// const arr = [1,2,3,4,5]

// const handler = arr.reduce(function(acc,product){
//     return acc + product

// })
// console.log(handler)



// const arr  = [1,2,3,4,5]
// const arr2 = [...arr,6,7,8]
// console.log(arr2)

// let copy = [1,2,3,4,5,6]
// let shallw = [...copy]

// shallw.push(40);
// console.log(shallw)
// console.log(copy)

// const user = {
//      email :"hunainkhan1122@gmail.com",
//      name : "hunain"
// }
// const copy = [...user]
// console.log(copy)


// var doc = document.querySelector(".btn");
// doc.addEventListener("click",(bc)=>{
//     alert("hey")
    
    
// })


// setTimeout(() => {
//     console.log("hey")
// }, 3000);

// setInterval(() => {
//     console.log("rocks")
// }, 1000);



// const fetch = new Promise((resolve,reject)=>{
//     let sucess = true
//     if (sucess) {
//         resolve("tu makmiyab ho")
        
//     } else {
//         reject("tum fail ho")
//     }
// })

// console.log(fetch)


// async function name() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users")
//         let res =  await data.json();
//         console.log(res)
//     } catch{
//         console.log("error found")
        
//     }

    
// }


// async function name() {
//     const data = await fetch("")
//     const datas = await  data.json()
    
// }


// console.log(`hey`)

// let namse = "3"
// let basit = 3

// console.log(namse === basit)

// let hunain = null;
// console.log(hunain)


// console.log("i")
// setTimeout(() => {
//     console.log("tosia")
// }, 3000);

// console.log("love")


// const apicalling = document.getElementById("user");

// async function callinglist() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users")
//         const res = await data.json()
//         console.log(res) 

//         apicalling.innerHTML = res.map(user => {
//             return `<p>${user.id} ${user.name} ${user.email}</p>`;
//         });

//     } catch {
//         console.log("error found")
        
//     }

    
// }

// callinglist()


// function closure() {
//     let count = 0;


//    return function() {
//         count++
//         console.log(count)
        
//     }
// }
// const coutning = closure()
// coutning();
// coutning();
// coutning();
// coutning();
// coutning();


const numbers = [1, 2, 3, 4, 5, 6,"hunain"];

// const arr = numbers.map(function(square){
//     return square * 2
    
// })

// console.log(arr)


// const arr = numbers.filter((function(fitleing){
//    return fitleing % 2 === 0
// }))
// console.log(arr)

// const sum  = numbers.reduce(function(suming,acc){
//     return suming + acc
    
// }, 0)
// console.log(sum)


// async function fetchingapi() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data)
//         console.log(data.name)
//         data.forEach(user => {
//             console.log(user.name)
            
//         });
//     } catch {
//         console.log("errror found")
        
//     }

    
// }fetchingapi()


// const user = {
//     name: "Hunain",
//     sub:"khan",
//     getName() {
//         return this.user;
//       }
      
//   };

//   console.log(user.getName());
  
// console.log("hey")

// let counter = document.getElementsByClassName("count")[0];
// let increment = document.getElementsByClassName("increment")[0];
// let decrement = document.getElementsByClassName("Decrement")[0];

// let count = 0;

// increment.addEventListener("click", function() {
//     count ++
//     counter.innerHTML = count
    
// })

// decrement.addEventListener("click", function() {
//     if (count > 0) {
//         count --
//         counter.innerHTML = count
        
//     } else {
//         console.log("fucming error")
        
//     }

// })


// setInterval(() => {
//     console.log("error")
// }, 3000);


// let str = "hello";

// let  reversed  = str.split("").reverse().join()
// console.log(reversed)

// let names  = "hunain"
// let reseverd = names.split("").reverse().join("")
// console.log(reseverd)

// function palimdrom(str) {
//     let back = str.split("").reverse().join("")
//     return back === str
    
// }
// console.log(palimdrom("madam"))
// console.log(palimdrom("hello"))


const arr = [1,2,3,4,5,5,6,6,7,5]
const dplicate =  [...new Set(arr)]
console.log(dplicate)
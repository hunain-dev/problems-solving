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


// const arr = [1,2,3,4,5,5,6,6,7,5]
// const dplicate =  [...new Set(arr)]
// console.log(dplicate)




// function createcounter() {
//     let count = 0;

//     return function () {
//         count ++
//         console.log(count)
        
//     }
    
// }
// const counter = createcounter();

// counter()
// counter()
// counter()
// counter()


// console.log(a);
// var a = 10;


// console.log(b);
// let b = 20;

// const user = {
//     name: "Hunain",
//     getName: function () {
//       console.log(this.name);
//     }
//   };
  
//   const getUserName = user.getName;
//  console.log( getUserName())
  

// const nums = [1, 2, 3, 4, 5, 6];


// const arr = nums.filter(function(square) {
//     return square % 2 == 0

    
// })
// console.log(arr)


// const arr = [1, 2, 2, 3, 4, 4, 5];
// const duplicate = [...new Set(arr)];
// console.log(duplicate)


// function palindroms(str) {
//     const back = str.split("").reverse().join("")
//     return back === str
// }

// console.log(palindroms("level"))


// async function fetchData() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         console.log(data);
//     } catch  {
//         alert("alert hass ben found")
        
//     }
  
//   }
//   fetchData()


// let names = "hunain";
// const returns = names.split("").reverse().join("")
// console.log(returns)


// document.getElementById("parent").addEventListener("click", () =>{
//     console.log("hey")
// })


// document.getElementById("clid").addEventListener("click", (event) =>{
//     event.stopPropagation();
//     console.log("clid")
// })


// document.getElementById("section").addEventListener("click",() =>{
//     console.log("hunain")
// })

// document.getElementById("child").addEventListener("click",(event) =>{
//     event.stopPropagation()
//     console.log("child hunain")
// })


// function outer() {
//     let count = 0;
  
//     return function () {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const fn1 = outer();
//   fn1();
//   fn1();
  
//   const fn2 = outer();
//   fn2();


//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   }
  

// let a = 10;

// function test() {
//   console.log(a);
//   let a = 20;
// }

// test();
// const arr = [1, [2, [3, 4]], 5]
// console.log(arr)

// function show() {
//     console.log(this);
//   }
  
//   show();

//   console.log([] == []);
// console.log([] == ![]);

// var x = 5;
// let y = 10;

// function test() {
//   var x = 20;
//   let y = 30;
//   console.log(x, y);
// }
// test();
// console.log(x, y);


// function greeet(name) {
//     return function() {
//         console.log("hello my name is",name)
        
//     }
    
// }
// let greeting = greeet("hunain");
// let greetings = greeet("abdullah");
// greeting()
// greetings()


// const arr = [1,2,3,4,5,5,6,6,7,7,8,8,9,9,10]
// const duplicate = [...new Set(arr)]
// console.log(duplicate)

// function palindromss(str) {

//     const dubplicates = str.split("").reverse("").join("")
//     return dubplicates === str
    
// }
// console.log(palindromss("121"))


// let string = "hunain"
// const reverses = string.split("").reverse().join("")
// console.log(reverses)



// function clouses(str) {

//     return function(){
//         console.log("hello",str)
        
//     }

    
// }
// const greeting = clouses("hunain");
// const greetings = clouses("abdullah");
// greeting()
// greetings()

// setTimeout(() => {
//     console.log("hello hunain")
// }, 3000);

// setInterval(() => {
//     console.log("hello hunain")
// }, 3000);

// const sum = [1, 2, 3, 4, 5]
// const arr = sum.reduce((run,acc)=> run + acc,0)
// console.log(arr)


// function name(str) {
//     const palindrom = str.split("").reverse().join("");
//     return palindrom === str
    
// }
//  console.log(name("madam")) 
//  console.log(name("level")) 
//  console.log(name("hellow")) 


//  const arr = [1, 2, 2, 3, 4, 4, 5]

//  const sec = [...new Set(arr)]
//  console.log(sec)


// const firstnumber = Number(prompt("first number")) 
// const Secondnumber = Number(prompt("second number"))

// const plus = firstnumber + Secondnumber;
// const minus = firstnumber - Secondnumber
// const mutlply = firstnumber * Secondnumber
// const divide = firstnumber % Secondnumber

// const results = [
//     { operation: "Sum", value: plus },
//     { operation: "Difference", value: minus },
//     { operation: "Product", value: mutlply },
//     { operation: "Division", value: divide },
// ];


// const resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = results.map(item => `<p>${item.operation}: ${item.value}</p>`).join("");

// alert("hey hunain")

// console.log(a)
// var a = 10


// let x = 10
// {
//   let x = 20
// }
// console.log(x)



// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr)


// function test() {
//   console.log(name)
//   var name = "Hunain"
// }
// test()

// console.log(typeof null)
// const nums = [1, 2, 3, 4]
// const result = nums.map(n => n > 2)
// console.log(result)


// let a = []
// let b = []
// console.log(a == b)


// let rname =  "javascript"
// const nain = rname.split("").reverse().join("")
// console.log(nain)


// alert("hey hunain")


// var hamare pass aik varibale hote hai jo reuckla rbhi hota hai aur updatte bhi hota haiii but ab es7 me ab ye itna secrue nh hai
// let hamare passs redeclae to nh htoa but update zaroor hota haiii
// const ye na redeclae nh hota aur update bhi nh hota haiii

// console.log(a)
// let a = 30;


// function outerfunc() {

//     let name = "hunain"
//     function innerr() {
//         console.log("hellow",name)
        
//     }
//     innerr()
// }
// console.log(outerfunc())



// for(let i = 0; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i)        
//     }, 3000);
// }

// const obj = { name: "Hunain" };
// obj.name = "Ali";
// console.log(obj);


// console.log(typeof null);
// let a = [1,2,3,4];
// let b = a;
// b.push(5);
// console.log(a);

// const sum = (a) => (b) => a + b;
// console.log(sum(5)(3));

// console.log([] == []);


// let x = 10;
// (function () {
//   console.log(x);
//   let x = 20;
// })();


// const Counter = () => {

//   let count = 0;
//   return (
//     <button onClick={() => count++}>
//       {count}
//     </button>
//   );
// };
// export default Counter;


// const arr = [1,2,3,4,5,6,7,8,9,9,2,2,3,4];
// const nc = [...new Set(arr)]
// console.log(nc)

let name  = "hunain khan"
let sum = name.split("").reverse("").join("")
console.log(sum)
// console.log(name)
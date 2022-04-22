console.log("Welcome");



//Que.1--Write one example explaining how you can write a callback function 
//===>

function greet(name) {
    alert('Hello ' + name);
  }
  
  function pro(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  pro(greet);


// Que.3-- "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//===>
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


let prom = new Promise((resolve,reject) =>{
    resolve();
})

prom.then(()=>{
    setTimeout(() => {
        console.log("1")
    }, 1000);
}).then(()=>{
    setTimeout(() => {
        console.log("2")
    }, 2000);
}).then(()=>{
    setTimeout(() => {
        console.log("3")
    }, 3000);
}).then(()=>{
    setTimeout(() => {
        console.log("4")
    }, 4000);
}).then(()=>{
    setTimeout(() => {
        console.log("5")
    }, 5000);
}).then(()=>{
    setTimeout(() => {
        console.log("6")
    }, 6000);
}).then(()=>{
    setTimeout(() => {
        console.log("7")
    }, 7000);
})

//Que.5--Create examples to explain callback function.
//===>

const sayHi = (nameOfFrirnd)=>{
    console.log("Hello my friend", nameOfFrirnd);
};

const greeting = (friend,callbackFunction)=>{
    callbackFunction(friend);
};

greeting("Shubham",sayHi);


//Que.6--Create examples to explain callback hell function.
//===>
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

const getNum = () => {
    console.log("Printing the numbers");
    setTimeout(() => {
    console.log("1")
    setTimeout(() => {
    console.log("2");
    setTimeout(() => {
    console.log("3");
    setTimeout(() => {                     
    console.log("4");                   
    setTimeout(() => {
    console.log("5");                      
    setTimeout(() => {
    console.log("6");
    setTimeout(() => {
    console.log("7");
    },1000);                           
    },1000);
    },1000);
    },1000);
    },1000);
    },1000);        
    },1000);
}

getNum();

//Que.7--Create examples to explain promises function.
//===>

let promise11 = (arg) =>
new Promise((resolve,reject)=>{
    
    if (arg=="yes"){
        return resolve();
    }
    else{
        return reject();
    }
})


promise11("y").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})


//Que.8--Create examples to explain async await function
//===>

async function tryingProm()
{
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    
}

console.log("Before calling the function");
let data = tryingProm();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");
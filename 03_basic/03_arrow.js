
const user={
    username:"mejbha",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this machines`);
        // console.log(this.welcomeMessage)
    }
}
// this means current contest 
// user.welcomeMessage(); 


function userAcces(){
    console.log(this);
}
// userAcces()

const obj = { a: "Custom" };

// Variables declared with var become properties of 'globalThis'.
var a = "Global";

function whatsThis() {
  return this.a; // 'this' depends on how the function is called
}

// console.log(whatsThis()); //

function addTwo(num1, num2){
    return num1+num2;
}

// console.log(addTwo(2,4));
const addTwoNumber=function(num1, num2){
    return num1+num2;
}

// console.log(addTwoNumber(2,5));

// const addtw=(num1,num2)=>{return num1+num2}
// const addtw=(num1,num2)=> num1+num2
const addtw=(num1,num2)=> (num1+num2)

// console.log(addtw(2,8))

const userInfo=(num1,num2)=>({username:"mejbha"})

console.log(userInfo())
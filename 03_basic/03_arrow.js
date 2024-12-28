
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

console.log(whatsThis()); //


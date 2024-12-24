const mySym=Symbol("key1")
const person={
    myName:"mejbha",
    "full name":"armejbha",
    age:18,
    email:"mejbha@gmail.com",
    location:"nikunjo-2, dhaka",
    [mySym]:"mykey1"
}

// console.log(person["full name"])
// Object.freeze(person);

// person.email="rahim@gmail.com";

person.greeting=function(){
    console.log(`hello it's me${this.email}`);
}
console.log(person.greeting());

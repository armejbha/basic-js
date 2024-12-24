// const userInfo=new Object()
const myProfile={};
// console.log(userInfo);
myProfile.userName="mejbha";
myProfile.userId="234gab";
myProfile.userEmail="mejbha@gmail.com"
// console.log(myProfile);

const obj1={1:"a", 2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}

// console.log(obj3)

// console.log(Object.keys(myProfile));
// console.log(Object.values(myProfile));
// console.log(Object.entries(myProfile));
// console.log(myProfile.hasOwnProperty("userEmail"))

const production={
    fish:"ten kilo",
    egg:"one thousand"

}

const {fish}=production

// console.log(fish)

const navbar=({id})=>{
    console.log(id)
}
navbar(id="123ddgb")
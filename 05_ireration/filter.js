const heros=["ironman","batman","aquaman"];

heros.forEach( (hero)=>{
    // console.log(hero)
})

// console.log(store)

const numbers=[1,2,3,4,5,6,7,8];

const result=numbers.filter((num)=>num>4);
// console.log(result)

const store=[];

numbers.forEach((num)=>{
    if(num>4){
        store.push(num)
    }
    
})
console.log(store);

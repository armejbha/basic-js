function myUserName(userName){
    if(!userName){
        console.log("please enter a value")
        return
    }
    console.log(`this is a simple funciton ${userName}`);
    
}

// myUserName("mejbha")

function sum(num1, num2){
    // console.log(num1+num2);
    return num1+num2
}
const result=sum(2,3);
// console.log(result)
const userDetails={
    userName:"rahim",
    userId:"1233adc"
}

const findNewUsers=function(userInfo){
console.log(`${userInfo.userName} and ${userInfo.userId}`)
}

// findNewUsers({
//     userName:"abul ka",
//     userId:"420"
// })

const jobDetails=function(arrinfo){
    console.log(`${arrinfo[0]}`)
}

jobDetails(["abul","pabul","kabul"])
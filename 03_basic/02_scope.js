// { } within this anything is under block scope .

// above anything is global scope 

// from block scope global scope value can be controll but global scope cann't access block scope value


// nestest scope 

function userAcces(){
    const userName="mejbha";
    function innerUser(){
        const accessKey="acb234";
        // console.log(userName); parent value can be access 
    }
    // console.log(accessKey); cann't access child value
    innerUser()
}
userAcces();

if (true){
    const key="bds23";
    if(true){
        const pass="cds";
        // console.log(key);
    }
    // console.log(pass);
}

// ==================interesting topic============================ 
// console.log(access(5)) this is possible just for run function before declaring 
function access(num){
    return num+2;
}


// console.log(authcheck(2)) this is not possible due to it's expressiont that's why can not run bofore declare
const authcheck= function(key){
    return key+2;
}

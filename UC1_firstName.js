console.log("Welcome to user Registration");

const regex = /^[A-Z]{1}[a-z]{2,}$/;
let str = "sonu";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
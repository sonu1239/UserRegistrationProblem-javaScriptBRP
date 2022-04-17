const regex = /^[A-Za-z0-9]+([.+-_][A-Za-z0-9]+)*[@][a-zA-Z0-9]+[.][A-Za-z]+([.][A-Za-z]+)?$/;
let str = "ss316742@gmail.com";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
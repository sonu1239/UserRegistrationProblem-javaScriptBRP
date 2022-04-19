const regex = /^(?=.*[a-z0-9A-Z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
let str = ".Abc..123xyz.";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
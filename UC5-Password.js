const regex = /^[a-zA-Z0-9_!-+@#$]{8,}$/;
let str = "jkkjc784@#";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
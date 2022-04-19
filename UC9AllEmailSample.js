const regex = /^[A-Za-z0-9]+([.+-_][A-Za-z0-9]+)*(([@][a-zA-Z0-9]{1,}){1})+([.][A-Za-z]{2,3})+(([.][A-Za-z]{2,3}))?$/;
let str = "sonukumar1239@yahoo.com";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
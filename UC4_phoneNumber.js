const regex = /^[1-9]{1,2}[ ][1-9]{1}[0-9]{9}$/;
let str = "91 9113127494";

let result = regex.exec(str);
console.log("The result from exec is : ", result);

if(regex.test(str)){
    console.log(`The string ${str} matchs the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
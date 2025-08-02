let word = "Senthil123";
let regex = /\d+/; 
console.log(regex.test(word));

const aadharphonenumber="9788234740";
const hidenumber=aadharphonenumber.replace(/\d{6}$/, "******")
console.log(hidenumber);

let input = "Senthil23kumar";
let cleanName = input.replace(/\d+/g, "");
console.log(cleanName);

const condition=/abc/;
const pattern=new RegExp(condition);
console.log(pattern);

const username="SENTHIL senthil kumar";
const regexcondition=/senthil/gi
console.log(username.match(regexcondition));


const validName=(name)=>
{
     const regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
     return name.match(regex) !== null;
}

console.log(validName("Senthil Kumar")); 
console.log(validName("SENTHIL0024"));

console.log("Validating MOBILE");

function validNumber(number) {
  const regex = /^[6-9]\d{9}$/;
  return regex.exec(number) !== null;
}

console.log(validNumber("9500764990")); 
console.log(validNumber("5432198760"));
console.log(validNumber("1234567890"));


console.log("Validating CARD");

function validDebitCard(cardNumber) {
  const regex = new RegExp("^\\d{4}([\\s-]?\\d{4}){3}$");
  return regex.test(cardNumber);
}

console.log(validDebitCard("1234 5678 9012 3456"));  
console.log(validDebitCard("1234-5678-9012-3456"));  
console.log(validDebitCard("123456789012345"));
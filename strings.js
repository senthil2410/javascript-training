const email="kUMARsenthil1234@gmail.com";

const fname="Senthil Kumar";

const fullname=fname.toUpperCase();


const idCard="ACE12949";
console.log(fullname[0]);
console.log(fullname.at(10));

function errorChecking(checkemail,fullname,checkId)
{

    const email=checkemail.toLowerCase();
     const emailid=email.endsWith("@gmail.com");
     const spilitname=fullname.split(" ");
     const [firstname,lastname]=spilitname;
      const id=checkId.startsWith("ACE");


     if(emailid && firstname && lastname&&id)
     {
     console.log(firstname);
     console.log(lastname);
     console.log(email);
     }
 

}

errorChecking(email,fullname,idCard);

console.log(email.slice(17));
const sentence="7/9-0 Arima nagar Palani, Palani District"
const firstOccurance=sentence.indexOf("Palani");
console.log(sentence.indexOf("Palani",firstOccurance+1));

const spellmistake="The background colour of that box is blue colour";

const correctedsentence=spellmistake.replaceAll("colour","color");
console.log(correctedsentence);

const place=["palani","624601"];


const pincode=place.join('-');
console.log(pincode);


// Multi-line strings

const multiLine="Senthil Kumar\n 7/9-0 Arima Nagar Palani\n Palani-624601";

console.log(multiLine);

const templateLiteral=`Senthil Kumar
7/9-0 Arima Nagar Palani
Palani-624601`;

console.log(templateLiteral);


const cities=["palani","dharapuram","oddanchatram","madurai","pollachi","dindigul"];

for(let city of cities)
{
    city=city.toUpperCase();
    console.log(city);
}




